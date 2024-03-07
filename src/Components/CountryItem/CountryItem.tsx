import React from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import Country from '../CountryDetails/CountryDetails';
import './CountryItem.css'

const CountryItem: React.FC<{ country: Country; selected: boolean; onSelectCountry: (country: Country) => void }> = ({
  country,
  selected,
  onSelectCountry,
}) => {
  const handleClick = () => {
    onSelectCountry(country);
  };

  return (
    <li className={selected ? 'selected' : ''}>
      <img src={country.flags.png} alt={`${country.name.common} Flag`} />
      <h2>{country.name.common}</h2>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      
    </li>
  );
};

export default CountryItem;
