import { Link } from 'react-router-dom'


function CountriesList({ countryData}){

    

    return(
        <div className="col-5" 
        style={{
                 maxHeight: '90vh',
                 overflow: 'scroll'
               }}>
          <div className="list-group">
            {countryData.map(country => {
               
               return (
                <Link 
                    className="list-group-item list-group-item-action"
                    to={ "/" + country.alpha3Code}>
                   
                   🇦<img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
                    alt={`flag of ${country.name.common}`}
                    style={{height: '15px'}}

                   /> {country.name.common}
                </Link>
               )
            })}
           
          </div>
        </div>
    )
}

export default CountriesList;