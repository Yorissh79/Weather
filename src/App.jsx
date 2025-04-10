import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header' 
import Card from './components/card/Card'

function App() {
  const API = "7596fcbb41bd44a8de2ce782ccaf82f8"

  const [inpData, getInpData] = useState("")
  const [resp, getResp] = useState("")

  const getData = (data) => {
    getInpData(data)
  }

  const getWeather = () => {

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inpData + "&appid=" + API)
    .then(res => {
      getResp(res.data)
    })

  }

  return (
    <div className='container'>
      <Header sendToApp={getData}/>

      <div className='body'>

        {resp && <Card item={resp}/>}

      </div>
      <button onClick={getWeather}>Click to go</button>
    </div>
  )
}

export default App
