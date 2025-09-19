import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountry, setVisitedCountry] = useState([]);

    const HandleVisitedCountry = (country) => {
        //console.log('visited Country clicked', country);
        // const newVisitedCountry = [...visitedCountry, country];
        // setVisitedCountry(newVisitedCountry)
        setVisitedCountry([...visitedCountry, country])
        
    }

    const countriesNumber = use(countriesPromise);
    const countries = countriesNumber.countries;
    return (
        <div>
            <h2>There are {countries.length} countries</h2>
            <h4>Visited Countries are : {visitedCountry.length} </h4>
            <ul>
                <ol>{
                    visitedCountry.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                    }</ol>
            </ul>
            <div className='countries-div'>

            {
                countries.map(country => <Country
                    key={country.cca3.cca3}
                     country={country}
                     HandleVisitedCountry={HandleVisitedCountry}
                      ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;