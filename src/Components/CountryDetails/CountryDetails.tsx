import React, { useRef } from 'react';


export default interface Country {
  name: { common: string };
  capital: string;
  region: string;
  population: number;
  flags: { png: string };
}

const countryDetailsRef = useRef(null);
const CountryDetails: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={`${country.name.common} Flag`} />
      <p>Population: {country.population}</p>
      <p>Capitale: {country.capital}</p>
      <p>Région: {country.region}</p>
     
    </div>
  );
};


