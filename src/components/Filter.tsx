import "../styles/Filter.scss";

interface FilterProps {
    onChange: (region: string) => void;
}

const Filter: React.FC<FilterProps> = ({onChange}) => {

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }

    return ( 
        <div className="filter">
            <select name="region" id="region" onChange={handleRegionChange}>
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