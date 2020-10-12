import React, { useState } from 'react'
import Styles from './App.module.css'

import {Sidebar} from './components/Sidebar/Sidebar'
import { MapComponent } from './components/Map/Map'

const App = () => {
  const [data, setData] = useState([42.87, 74.59])
  console.log(data)
  return (
    <div className={Styles.app}>
      <Sidebar passData={setData} />
      <MapComponent coordinates={data} />
    </div>
  )
}

export default App

