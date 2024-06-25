import React from "react";

const StatisticalCard = ({ data }) => {
    // Check if data is defined and properties are valid before accessing
    if (!data || typeof data.cases !== 'number' || typeof data.recovered !== 'number' || typeof data.deaths !== 'number') {
        return <div>Data not available</div>; // or handle differently based on your use case
    }

    // Accessing properties after ensuring data is defined and valid
    return (
        <div>
            <h2>Total Cases: {data.cases.toLocaleString()}</h2>
            <h2>Recoveries: {data.recovered.toLocaleString()}</h2>
            <h2>Deaths: {data.deaths.toLocaleString()}</h2>
        </div>
    );
};


export default StatisticalCard;
