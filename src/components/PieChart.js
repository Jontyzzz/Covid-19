import React, { useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const PieChartComponent = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Clean up previous chart instance
        if (chartRef.current && chartRef.current.chartInstance) {
            chartRef.current.chartInstance.destroy();
        }

        // Initialize new chart instance
        const ctx = chartRef.current.chart.ctx;
        const newChartInstance = new window.Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Cases', 'Recoveries', 'Deaths'],
                datasets: [{
                    data: [data.cases, data.recovered, data.deaths],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: (tooltipItem) => {
                                const value = tooltipItem.raw;
                                const label = tooltipItem.label;
                                return `${label}: ${value.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });

        chartRef.current.chartInstance = newChartInstance;

    }, [data]);

    return (
        <div>
            <Pie ref={chartRef} />
        </div>
    );
};

export default PieChartComponent;
