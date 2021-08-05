import React from 'react'

const Weather= ({ weather }) => {
    

    return(
        <div>
            <h3>Weather in {weather.name}</h3>
            <p>Temperature: {weather.main.temp}</p>
            <p>Wind: {weather.wind.speed}</p>
           
        </div>

    )
}

export default Weather