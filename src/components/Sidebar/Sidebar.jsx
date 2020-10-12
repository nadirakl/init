import React, { useState } from 'react'
import Styles from './Sidebar.module.css'

export const Sidebar = (props) => {
    const [city, setCity] = useState('')
    const [locations, setLocations] = useState(false)

    const changeHander = (data) => {
        setCity(data.target.value)
    }

    const findLocation = (event) => {
        event.preventDefault()
        fetch(`https://nominatim.openstreetmap.org/search/?format=json&q=${city}`)
        .then(result => {
            result.json().then(data=> {
                setLocations(data)
            })
        })
    }
    
    console.log(locations)

    const propsHandler = (coord) => {
        props.passData(coord)
    }
    return (
        <div className={Styles.sidebar}>
            <form action="#" className={Styles.form}>
                <input onChange={changeHander} type="text" placeholder="Город"/>
                <button onClick={findLocation} type="submit">Найти</button>
            </form>
            <div className={Styles.block}>
                {
                    locations ?
                    locations.map(({display_name, type, lat, lon}, i) => {
                        return (
                        <li key={i} className={Styles.item} onClick={() => {propsHandler([lat,lon])}}>
                            <span>{display_name}</span>
                            <span>Type: {type}</span>
                        </li>
                        )
                    }) :''
                }
            </div>
        </div>
    )
}