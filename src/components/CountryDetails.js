import {useParams} from 'react-router-dom'
import {useEffect} from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'

function CountryDetails({ countryData }){

    const [ countryDetails, setCountryDetails ] = useState(null)

    const { countryCode } = useParams();

    useEffect(() => {
       const foundCountry =  countryData.find(element => {
        return element.alpha3Code === countryCode;
            })
            setCountryDetails(foundCountry)
    
    }, [ countryCode, countryData ])

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
        .then(res => res.json())
        .then(json => setCountryDetails(json))
        .catch(err => console.log(err))
    })
    

    return(

        <div className="col-7 text-center"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        { !countryDetails && <h1>No Country Details Yet!</h1>}
         { countryDetails && (
            <>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} 
                    alt={`flag of ${countryDetails.name.common}`}
                    style={{
                        height: '100px'
                        }} />
            <h1>{countryDetails.name.common}</h1>
        <table className="table">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td style={{width: '30%'
              }}>Capital</td>
              <td>{countryDetails.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {countryDetails.borders.map(alpha3Code => {
                    return (
                        <li>
                            <Link to={"/" + alpha3Code}>{alpha3Code}</Link>
                        </li>
                )
                    
                })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
            </>
         )}
      </div>

    )
}

export default CountryDetails