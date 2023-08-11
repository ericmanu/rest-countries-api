import "../styles/Search.scss";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
  }

const Search: React.FC<SearchInputProps> = ({value, onChange}) => {
    return ( 
        <div className="search">
            <AiOutlineSearch className="search-icon"/>
            <input 
                type="text"  
                placeholder="Search for a country…"
                value={value}
                onChange={({target}) => onChange(target.value)}
                />
        </div>
     );
}
 
export default Search;