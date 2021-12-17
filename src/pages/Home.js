import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_WEATHER_QUERY } from '../graphql/Queries'
import './home.css'

function Home() {
    
    const [citySearched, setCitySearched] =useState("") 
    const [getWeather,{data,error}] = useLazyQuery(GET_WEATHER_QUERY,{
        variables:{name:citySearched}
    })

    if(error) return <h3>error found</h3>
    if (data) {
        console.log(data)
    }
    return (
        <div className='home'>
            <fieldset>
            <h3>Search For Weather</h3>
            <input type="text" placeholder='city ...' onChange={(event)=>{setCitySearched(event.target.value)}} />
            <button onClick={()=>getWeather()}>Search</button>
            {/* load data */}
            <div className="weather">
        {data && (
          <>
            <h3> {data.getCityByName.name} </h3>
            <h3> {data.getCityByName.country} </h3>
            <h3>
              {" "}
              Temperature: {data.getCityByName.weather.temperature.actual}
            </h3>
            <h3>
              Description: {data.getCityByName.weather.summary.description}
            </h3>
            <h3>Wind Speed: {data.getCityByName.weather.wind.speed}</h3>
          </>
        )}
      </div>
      </fieldset>
</div>
    )
}

export default Home
