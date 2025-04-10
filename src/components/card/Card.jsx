import React from 'react'
import style from './Card.module.scss'

function Card({item}) {
  return (
    <div className={style.card}>

        <div className={style.cord}>
            <p>"Lon" + {item.coord.lon}</p>
            <p>"Lat" + {item.coord.lat}</p>
        </div>

        <div className={style.temp}>
            <p className={style.mainTemp}>"Temperature:" + {item.main.temp}</p>
        </div>

    </div>
  )
}

export default Card