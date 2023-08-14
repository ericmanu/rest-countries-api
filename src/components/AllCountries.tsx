import "../styles/AllCountries.scss"
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

interface CountryList {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface AllCountriesProps {
  searchTerm: string;
  regionFilter: string;
}

const AllCountries: React.FC<AllCountriesProps> = ({ searchTerm, regionFilter }) => {
  const [data, setData] = useState<CountryList[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCountries();
  }, []);

  const CountryData = () => {
    return data.filter((country) => {
      const countryName = country.name.toLowerCase().includes(searchTerm.toLowerCase());
      const regionOfCountry = regionFilter === 'All' || country.region === regionFilter;
      return countryName && regionOfCountry;
    });
  };

  return (
    <div className="ac">
      {CountryData().map(country => (
        <Link className="country-link" key={country.name} to={`/country/${country.name}`} >
          <div className="country-con">
            <div className="flag">
              <img src={country.flag} alt="flag" />
            </div>
            <div className="details">
              <p className="c-name" key={country.name}>{country.name}</p>
              <div className="c-prc">
                <p className="c-pop"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p className="c-reg"><strong>Region:</strong> {country.region}</p>
                <p className="c-cap"><strong>Capital:</strong> {country.capital}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllCountries;
