import "../styles/Search.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return ( 
        <div className="search">
            <AiOutlineSearch className="search-icon"/>
            <input type="text"  placeholder="Search for a country…"/>
        </div>
     );
}
 
export default Search;