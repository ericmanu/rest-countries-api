import "../styles/Home.scss"
import Search from "../components/Search";
import Filter from "../components/Filter";
import AllCountries from "../components/AllCountries";

const Home = () => {
    return (
        <>
            <div className="sf">
                <Search />
                <Filter />
            </div>
            <AllCountries />
        </>
    );
}

export default Home;