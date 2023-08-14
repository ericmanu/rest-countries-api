import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import "../styles/Filter.scss";

interface FilterProps {
    regionFilter: string;
    setRegionFilter: React.Dispatch<React.SetStateAction<string>>;
}

const regions = [
    { value: 'All', label: 'Filter by Region' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Filter: React.FC<FilterProps> = ({ regionFilter, setRegionFilter }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const storedRegion = localStorage.getItem('selectedRegion');
        const initialRegion = storedRegion || 'All';
        setRegionFilter(initialRegion);
    }, [setRegionFilter]);

    const handleOptionClick = (region: string) => {
        setRegionFilter(region);
        localStorage.setItem('selectedRegion', region);
        setIsOpen(false);
    };

    return (
        <div className="filter">
            <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="selected-option">
                    {regions.find(region => region.value === regionFilter)?.label}
                    <IoIosArrowDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
                </div>
                <div className={`options ${isOpen ? 'visible' : ''}`}>
                    {regions.map(region => (
                        <div
                            key={region.value}
                            className={`option ${region.value === regionFilter ? 'active' : ''}`}
                            onClick={() => handleOptionClick(region.value)}
                        >
                            {region.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filter;
