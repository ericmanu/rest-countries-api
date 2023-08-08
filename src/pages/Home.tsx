import "../styles/Home.scss"
import Search from "../components/Search";
import Filter from "../components/Filter";
import AllCountries from "../components/AllCountries";
import { useState } from "react";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('All');

    return (
        <>
            <div className="sf">
                <Search value={searchTerm} onChange={setSearchTerm}/>
                <Filter onChange={setSelectedRegion}/>
            </div>
            <AllCountries searchTerm={searchTerm} selectedRegion={selectedRegion}/>
        </>
    );
}

export default Home;