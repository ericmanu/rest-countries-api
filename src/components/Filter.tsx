import "../styles/Filter.scss"

const Filter = () => {
    return ( 
        <div className="filter">
            <select name="" id="">
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
     );
}
 
export default Filter;