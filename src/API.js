// src/API.js
import axios from 'axios';

export async function fetchCountryList() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    } catch (error) {
        console.error('Error fetching country list:', error);
        return []; // Return an empty array or handle the error appropriately
    }
}

export async function fetchHistoricalData(country) {
    try {
        const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=1500`);
        return response.data;
    } catch (error) {
        console.error('Error fetching historical data:', error);
        return {}; // Return an empty object or handle the error appropriately
    }
}
