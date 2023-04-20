import React, {useState, useEffect, useRef} from "react";

import TestServices from "../../services/TestServices";

const OrganizationsList = () => {
    const {GetLocation} = TestServices()
    const [adres, setAdres] = useState('')

    const getCoordUser = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            GetLocation({lat: position.coords.latitude, lon: position.coords.longitude}).then(result => setAdres(result))
        })
    }

    useEffect(() => {
        getCoordUser()
    }, [])


    const [allOrganizations, setAllOrganizations] = useState([])
    const [searchText, setSearchText] = useState('')
    const [searchMode, setSearchMode] = useState('name')

    const [selectedOrganization, setSelectedOrganization] = useState()

    const {getAdresses} = TestServices()

    const changeText = (text) => {
        setSearchText(text)
        getAdresses({query: text}).then(res => setAllOrganizations(res))
    }

    const setSearchInput = (e) => {
        setSearchText(e.target.innerText)
        
        getAdresses({query: e.target.id}).then(res => setSelectedOrganization(res[0]))
        setAllOrganizations(null)
    }

    const changeModeSearch = (e) => {
        if (e.target.classList.contains('addres')) {
            setSearchMode('addres')
        } else if (e.target.classList.contains('inn')) {
            console.log('INN')
            setSearchMode('inn')
        } else {
            setSearchMode('name')
        }
    }

    return (
        <section className="organizations" style={{paddingBottom: "150px"}}>
            <div className="organizations-container container">
                <h2 className="organizations-title">Ваш город: {adres}</h2>
                <div className="organizations-find">
                    <input style={{width: "100%"}} type="text" value={searchText} placeholder="Введите название компании / ИНН / Адрес" onChange={(e) => changeText(e.target.value)}/>
                    {allOrganizations && allOrganizations.map((item,i) => {
                        return (
                            <div style={{width: "100%", fontSize: "18px", padding: "40px 20px", lineHeight: "155%", cursor: "pointer"}} key={item.data.inn} id={item.data.inn} onClick={e => setSearchInput(e)}>
                                {item.data.address.value + '---' + item.data.inn + '---' + item.value}
                            </div>
                        )
                    })}

                    {!selectedOrganization ? null : <div>
                            {selectedOrganization.value}
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default OrganizationsList