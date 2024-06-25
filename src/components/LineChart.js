// // src/components/LineChart.js
// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const CustomLineChart = ({ data }) => {
//     const chartData = data.map((item) => ({
//         date: item.date,
//         cases: item.cases,
//     }));

//     return (
//         <ResponsiveContainer width="100%" height={400}>
//             <LineChart data={chartData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="cases" stroke="rgba(255, 99, 132, 1)" />
//             </LineChart>
//         </ResponsiveContainer>
//     );
// };

// export default CustomLineChart;

// src/components/LineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ data }) => {
    // Check if data is defined and is an array
    if (!Array.isArray(data)) {
        // Handle case where data is not an array (could be undefined, null, or another type)
        return <div>No data available</div>; // or handle differently based on your use case
    }

    // Transform data format if necessary
    const chartData = data.map((item) => ({
        date: item.date,
        cases: item.cases,
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cases" stroke="rgba(255, 99, 132, 1)" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default CustomLineChart;

