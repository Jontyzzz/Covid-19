// src/App.js
import React, { useState, useEffect } from 'react';
import { fetchHistoricalData } from '../src/API'; // Import fetchHistoricalData from API.js
import CountryDropdown from '../src/components/countryDropdown';
import StatisticalCard from '../src/components/statisticalCard';
// import LineChart from '../src/components/LineChart';
import PieChart from '../src/components/PieChart';
import CustomLineChart from '../src/components/LineChart'

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [historicalData, setHistoricalData] = useState({});

  useEffect(() => {
    // Fetch historical data when selectedCountry changes
    fetchHistoricalData(selectedCountry)
      .then(data => {
        setHistoricalData(data);
      })
      .catch(error => {
        console.error('Error fetching historical data:', error);
        setHistoricalData({}); // Handle error state
      });
  }, [selectedCountry]); // Trigger effect when selectedCountry changes

  return (
    <div>
      <CountryDropdown />
      <StatisticalCard data={historicalData} />
      <CustomLineChart data={historicalData} />
      <PieChart data={historicalData} />
    </div>
  );
};

export default App;
