import React, { useState } from 'react';
import './filterRegion.css'
interface Region {
  label: string;
  value: string; 
}

const FilterByRegion: React.FC<{ regions: Region[]; onFilterRegion: (region: string) => void }> = (
  { regions, onFilterRegion }
) => {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value as string; 
    setSelectedRegion(selectedRegion);
    onFilterRegion(selectedRegion);
  };

  return (
    <div className="filter-by-region">
      <label htmlFor="region-select">Filtrer By Region:</label>
      <select id="region-select" value={selectedRegion} onChange={handleRegionChange}>
       
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByRegion;
