import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'




function App() {



  const [ countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(json => setCountryList(json))
    .catch(err => console.log(err))
  }, [])
  
  
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countryData={countryList}/>
          <Routes>
            <Route path="/:countryCode" element={<CountryDetails />}/>
            <Route path="/" element={<div className="col-7 text-center">Home</div>}/>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
