import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './detail.css'

const Detail = (props) => {
    const person = props.match.params
    const [weather,setWeather] = useState([])
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${person.city}&units=metric&appid=2ece6441e298124f969938e7eb0d0302`).then((res)=>{
            const temp = res.data.main.temp
            const main = res.data.weather[0].main
            setWeather({temp,main})
        }).catch((error)=>{
            console.log('press view detail')
        })
    },[person.city]);
    const weatherIcon = (props) => {
        switch (props) {
            case "Clear":
                return "🌞";
            case "Clouds":
                return "☁️";
            case "Drizzle":
                return "☔️";
            case "Rain":
                return "☔️";
            case "Snow":
                return "❄️";
            case "Fog":
                return "🌁";
            case "Thunderstorm":
                return "⛈️";
            case "Mist":
                return "🌁"
            default:
                return "--";
        }
    }
    return (
        <div className="content">
            <div className="title">Details</div>
            <p>👤 Name: {person.name}</p>
            <p>📌 City: {person.city}</p>
            <p>🌡 Temperature: {weather.temp?weather.temp:'--'}℃</p>
            <div className="weatherIcon">{weatherIcon(weather.main)}</div>
            <div className='close' onClick={()=>{props.history.push(`/detail`)}}>X</div> 
        </div>
    )
}

export default Detail;
