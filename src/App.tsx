import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import CountryList from './Components/CountryList/CountryList';
import Country from './Components/CountryDetails/CountryDetails';
import CountryDetails from './Components/CountryDetails/CountryDetails'
import FilterByRegion from './Components/FiltrerByRegion/FiltrerByRegion';
const App = () => {
  const [countries, setCountries] = useState<Country[]>([]); 
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null); 
  const [filterRegion, setFilterRegion] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json() as Country[]; 
        setCountries(data);
        const uniqueRegions = Array.from(new Set(data.map((country) => country.region)));

        setRegions(uniqueRegions);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleFilterRegion = (region: string) => {
    setFilterRegion(region);
  };
  const filteredCountries = countries.filter((country) => {
    
    return filterRegion === '' || country.region === filterRegion;
  });


  return (
    <div>
      <Header />
      <CountryList
        countries={filteredCountries}
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
        filterRegion={filterRegion}
      />
       {selectedCountry && 
       <CountryDetails country={selectedCountry} />}

        <div>
          <FilterByRegion regions={regions} onFilterRegion={handleFilterRegion} />
          <CountryList countries={filteredCountries} selectedCountry={null} onSelectCountry={function (country: Country): void {
          throw new Error('Function not implemented.');
        } } filterRegion={''} />
        </div>
    </div>
    
  );
};

export default App;
