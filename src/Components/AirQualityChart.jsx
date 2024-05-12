import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const AirQualityChart = () => {
  const [airQualityData, setAirQualityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
         'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAirQualityData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (airQualityData) {
      const ctx = document.getElementById('airQualityChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: airQualityData.hourly.time,
          datasets: [
            {
              label: 'PM10 (μg/m³)',
              data: airQualityData.hourly.pm10,
              borderColor: 'rgba(255, 99, 132, 1)',
              tension: 0.1,
            },
            {
              label: 'PM2.5 (μg/m³)',
              data: airQualityData.hourly.pm2_5,
              borderColor: 'rgba(54, 162, 235, 1)',
              tension: 0.1,
            },
            {
              label: 'Carbon Monoxide (μg/m³)',
              data: airQualityData.hourly.carbon_monoxide,
              borderColor: 'rgba(255, 206, 86, 1)',
              tension: 0.1,
            },
            {
              label: 'Nitrogen Dioxide (μg/m³)',
              data: airQualityData.hourly.nitrogen_dioxide,
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1,
            },
            {
              label: 'Sulphur Dioxide (μg/m³)',
              data: airQualityData.hourly.sulphur_dioxide,
              borderColor: 'rgba(153, 102, 255, 1)',
              tension: 0.1,
            },
            {
              label: 'Ozone (μg/m³)',
              data: airQualityData.hourly.ozone,
              borderColor: 'rgba(255, 159, 64, 1)',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [airQualityData]);

  return  <canvas id="airQualityChart" width="400" height="200"></canvas>;
};

export default AirQualityChart;
