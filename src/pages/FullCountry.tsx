import "../styles/FullCountry.scss";
import { GoArrowLeft } from 'react-icons/go';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export interface Country {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: { code: string }[];
  languages: { name: string }[];
  borders: string[];
}

const FullCountry: React.FC = () => {
  const [detaiiledCountry, setDetailedCountry] = useState<Country[]>([]);
  const { countryName } = useParams<{ countryName: string }>();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setDetailedCountry(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCountry();
  }, []);

  return (
    <div className="fcc">
      <Link to="/" className="btn-link">
        <button className="back">
          <GoArrowLeft className='arrow-left' />
          <h6>Back</h6>
        </button>
      </Link>
      <div className="country-full">
        {
          detaiiledCountry.map(country => {
            if (country.name === countryName) {
              return (
                <div key={country.name} className='c-con-element'>
                  <div className='country-flags'>
                    <img src={country.flag} alt='flag' />
                  </div>
                  <div className='c-details-con'>
                    <h1 className="country-name">{country.name}</h1>
                    <div className="c-details-flex">
                      <div className="c-details-one">
                        <p><strong>Native Name:</strong> {country.nativeName}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Sub Region:</strong> {country.subregion}</p>
                        <p><strong>Capital:</strong> {country.capital}</p>
                      </div>
                      <div className="c-details-two">
                        <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
                        <p><strong>Currencies:</strong> {country.currencies.map(currency => currency.code)}</p>
                        <p><strong>Languages:</strong> {country.languages.map(language => language.name).join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default FullCountry;