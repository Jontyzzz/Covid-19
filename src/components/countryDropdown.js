// src/CountryDropdown.js
import React, { useState, useEffect } from 'react';
import { fetchCountryList } from '../API'; // Import fetchCountryList from API.js

const CountryDropdown = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('usa');

    useEffect(() => {
        fetchCountryList()
            .then(data => {
                setCountries(data.map(country => ({ label: country.name, value: country.alpha2code })));
            })
            .catch(error => {
                console.error('Error fetching country list:', error);
                setCountries([]); // Handle error state
            });
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <select value={selectedCountry} onChange={handleCountryChange}>
            {countries.map(country => (
                <option key={country.value} value={country.value}>
                    {country.label}
                </option>
            ))}
        </select>
    );
};

export default CountryDropdown;
