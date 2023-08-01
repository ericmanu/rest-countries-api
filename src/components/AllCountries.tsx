import "../styles/AllCountries.scss"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the type for the data
interface Country {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  // Add other properties here if needed
}

const AllCountries = () => {
  const [data, setData] = useState<Country[]>([]); // Specify the type as Country[]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ac">
      {data.map(country => (
        <div className="country-con">
            <p key={country.name}>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AllCountries;
