import React, { useEffect } from 'react';
import "../styles/Filter.scss";

interface FilterProps {
    regionFilter: string;
    setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ regionFilter, setRegionFilter }) => {
    useEffect(() => {
        const storedRegion = localStorage.getItem('selectedRegion');
        const initialRegion = storedRegion || 'All';
        setRegionFilter(initialRegion);
    }, [setRegionFilter]);

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const region = e.target.value;
        setRegionFilter(region);
        localStorage.setItem('selectedRegion', region);
    }

    return ( 
        <div className="filter">
            <select name="region" id="region" onChange={handleRegionChange} value={regionFilter}>
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
     );
}
 
export default Filter;
