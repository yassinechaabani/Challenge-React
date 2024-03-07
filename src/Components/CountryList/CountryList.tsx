import React from 'react';
import CountryItem from '../CountryItem/CountryItem';
import CountryDetails from '../CountryDetails/CountryDetails';
import Country from '../CountryDetails/CountryDetails';

const CountryList: React.FC<{
  countries: Country[];
  selectedCountry: Country | null;
  onSelectCountry: (country: Country) => void;
  filterRegion: string;
}> = ({ countries, selectedCountry, onSelectCountry, filterRegion }) => {
  const filteredCountries = countries.filter(
    (country: Country) => country.region === filterRegion || filterRegion === ''
  );

  return (
    <ul>
      {filteredCountries.map((country: Country) => (
        <CountryItem
          key={country.name.common}
          country={country}
          selected={country === selectedCountry}
          onSelectCountry={onSelectCountry}
        />
      ))}
    </ul>
  );
};

export default CountryList;
