import "../styles/Home.scss"
import Nav from "../components/Nav";
import Search from "../components/Search";
import Filter from "../components/Filter";

const Home = () => {
    return ( 
        <>
            <Nav />
            <div className="sf">
                <Search />
                <Filter />
            </div>
        </>
     );
}
 
export default Home;