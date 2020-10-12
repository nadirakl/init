import React from 'react'
import Styles from './Map.module.css'

import { Map, Marker, TileLayer } from 'react-leaflet'


export const MapComponent = ({coordinates}) => {
    const position = [coordinates[0], +coordinates[1]]

    return (
        <div className={Styles.map}>
            <Map center={position} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}></Marker>
            </Map>
        </div>
    )
}


