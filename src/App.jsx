import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Loadcountries></Loadcountries>
    </div>
  );
}

function Loadcountries() {
  const [countries, setCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])

  return (
    <div className="country-list">
      {
        countries.map(country => <CountryInfo data={country}></CountryInfo> )
      }
    </div>
  )
}


function CountryInfo(pops){
  const country = pops.data;
  return (
    <div className="country-info">
      <img src={country.flag} width="280px" height="162px"alt="" />
      <h3>Country: {country.name}</h3>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
      <p>Currency: {country.currencies[0].code} - {country.currencies[0].name}</p>
      <p>Region: {country.region}</p>
      <p>Demonym: {country.demonym}</p>
    </div>
  )
}

export default App;
