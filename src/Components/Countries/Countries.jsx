import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {

    const countriesNumber = use(countriesPromise);
    const countries = countriesNumber.countries;
    return (
        <div>
            <h2>There are {countries.length} countries</h2>
            {
                countries.map(country => <Country
                    key={country.cca3.cca3} country={country} ></Country>)
            }
        </div>
    );
};

export default Countries;