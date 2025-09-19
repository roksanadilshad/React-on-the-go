import React, { useState } from 'react';
import './Country.css'

const Country = ({country, HandleVisitedCountry}) => {
    //console.log(country.name.common)
    //console.log(HandleVisitedCountry);
    
    const [Visited , setVisited] = useState(false);

    const HandleVisited = () => {
        //basic system
        //   if(Visited){
        //     setVisited(false)
        //   }
        //   else{
        //     setVisited(true)
        //   }
        //2nd system
        //setVisited(Visited ? false : true)
        //easy system -toggle 
        setVisited(!Visited);
        HandleVisitedCountry(country)

    }
    return (
        <div className={`country-div ${Visited && 'visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} /> 
            {/* ? dilam jate banan vul holeu alt er moddhe thaka likha show kore */}
            <h3>Name: {country.name.common}</h3>
            <h4>Official-name: ({country.name.official})</h4>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Area : {country.area.area}
                 {country.area.area > 300000 ?
                  'Big Country' : 'Small Country'}
                 </p>
            <button onClick={HandleVisited}>
                {Visited ? 'Visited' : "Not Visited"}
                </button>
        </div>
    );
};

export default Country;