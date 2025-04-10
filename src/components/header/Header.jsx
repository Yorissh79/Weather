import React, { useState } from 'react'
import style from './Header.module.scss'

function Header({sendToApp}) {
  const [data, sendData] = useState("")

  const onDataChanged = (e) => {

    const value = e.target.value
    sendData(value)
    sendToApp(value)

  }

  return (
    <div>

        <p className={style.icon}>Weather app</p> 

        <label htmlFor={style.inp}>City name:</label>
        <input type="text" name='input' id={style.inp} onChange={onDataChanged} value={data}/>

    </div>
  )
}

export default Header