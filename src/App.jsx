import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header' 
import Card from './components/card/Card'
import axios from 'axios'

function App() {
  const API = "7596fcbb41bd44a8de2ce782ccaf82f8"

  const [inpData, getInpData] = useState("")
  const [resp, getResp] = useState([])

  const getData = (data) => {
    getInpData(data)
  }

  const getWeather = () => {

    axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + inpData + "&appid=" + API)
    .then(res => {
      getResp(res.data)
    })

  }

  return (
    <div className='container'>
      <Header sendToApp={getData}/>

      <button onClick={() => getWeather()}>Click to go</button>

      <div className='body'>

        {/* {resp && resp.map(item => <Card item={item}/>)} */}
        {/* {resp && <Card item={resp}/>} */}
        <p>{console.log(resp)}</p>

      </div>
    </div>
  )
}

export default App
