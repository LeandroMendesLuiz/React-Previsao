import './WeatherInfo.css'

function WeatherInfo({ weather }) {
    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>

            <div className='weather-info'> 
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>


            <div className='details'>
                <p>Sensação termica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.humidity}%</p>
            </div>
        </div>
    )
}


export default WeatherInfo