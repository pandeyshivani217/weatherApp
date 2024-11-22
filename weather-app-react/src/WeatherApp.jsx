import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Bihar",
        feelsLike: 14.75,
        humidity: 82,
        temp: 15.05,
        tempMax: 15.05,
        tempMin: 15.05,
        weather: "mist",
    });
    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"white"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}