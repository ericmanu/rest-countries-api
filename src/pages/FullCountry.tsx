import "../styles/FullCountry.scss";
import { GoArrowLeft } from 'react-icons/go';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

interface Country {
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
  const [detailedCountry, setDetailedCountry] = useState<Country[]>([]);
  const { countryName } = useParams<{ countryName: string }>();
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const previousCountry = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setDetailedCountry(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };
    fetchCountry();
  }, []);

  useEffect(() => {
    const fetchBorderCountries = async () => {
      try {
        const selectedCountry = detailedCountry.find(country => country.name === countryName);
        if (selectedCountry && selectedCountry.borders && selectedCountry.borders.length > 0) {
          const borderAlphaCodes = selectedCountry.borders.join(',');
          const borderResponse = await axios.get<Country[]>(
            `https://restcountries.com/v2/alpha?codes=${borderAlphaCodes}`
          );
          setBorderCountries(borderResponse.data);
        }
      } catch (error) {
        console.error('Error fetching border countries:', error);
      }
    };
    fetchBorderCountries();
  }, [countryName, detailedCountry]);

  return (
    <div className="fcc">
      {/* <Link to="/" className="btn-link"> */}
      <button className="back" onClick={() => { previousCountry(-1) }}>
        <GoArrowLeft className='arrow-left' />
        <h6>Back</h6>
      </button>
      {/* </Link> */}
      <div className="country-full">
        {loading ? (
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          detailedCountry.map(country => {
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
                    <div className="border-countries">
                      <strong style={{ width: '9rem', marginTop: '.2rem' }}>Border Countries:</strong>
                      <div className="border-list">
                        {borderCountries.length > 0
                          ? borderCountries.map((borderCountry) => (
                            <Link
                              key={borderCountry.name}
                              to={`/country/${borderCountry.name}`}
                              className="border-country-link"
                            >
                              {borderCountry.name}
                            </Link>
                          ))
                          : "No border country found"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
}

export default FullCountry;
