const WeatherInfo  = ({city, temp, feels, humidity, wind }) => {
    return ( 
      <section>
           <h1>{city}</h1>
           <h2>temperatuur: {Math.round(temp)}°C</h2>
           <h3> voelt aan als {Math.round(feels)}°C</h3>
           <h3> luchtvochtigheid {humidity}%</h3>
           <h3>windsnelheid {wind} m/s</h3>
        </section>



     );
}
 
export default WeatherInfo ;