// FootballAnalytics.js
import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, BarElement, LineElement, CategoryScale, LinearScale, Tooltip, Legend);

const FootballAnalytics = () => {
  const possessionData = {
    labels: ['Equipo A', 'Equipo B'],
    datasets: [
      {
        label: 'Posesión de balón',
        data: [55, 45],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const goalsData = {
    labels: ['Equipo A', 'Equipo B'],
    datasets: [
      {
        label: 'Goles',
        data: [3, 2],
        backgroundColor: ['#4CAF50', '#FFC107'],
      },
    ],
  };

  const shotsData = {
    labels: ['Min 10', 'Min 20', 'Min 30', 'Min 40', 'Min 50', 'Min 60', 'Min 70', 'Min 80', 'Min 90'],
    datasets: [
      {
        label: 'Disparos a puerta Equipo A',
        data: [1, 3, 4, 5, 6, 7, 8, 10, 12],
        borderColor: '#36A2EB',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Disparos a puerta Equipo B',
        data: [0, 1, 2, 4, 5, 6, 7, 8, 9],
        borderColor: '#FF6384',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const cardData = {
    labels: ['Tarjetas Amarillas', 'Tarjetas Rojas'],
    datasets: [
      {
        label: 'Equipo A',
        data: [2, 0],
        backgroundColor: '#FFA726',
      },
      {
        label: 'Equipo B',
        data: [1, 1],
        backgroundColor: '#EF5350',
      },
    ],
  };

  return (
    <div>
      <h3>Análisis del Partido</h3>
      <div style={{ width: '250px', margin: '0 auto' }}>
        <h4>Posesión</h4>
        <Pie data={possessionData} />
      </div>
      <div style={{ width: '250px', margin: '0 auto' }}>
        <h4>Goles</h4>
        <Bar data={goalsData} />
      </div>
      <div style={{ width: '250px', margin: '0 auto' }}>
        <h4>Disparos a Puerta</h4>
        <Line data={shotsData} />
      </div>
      <div style={{ width: '250px', margin: '0 auto' }}>
        <h4>Tarjetas</h4>
        <Bar data={cardData} options={{ indexAxis: 'y' }} />
      </div>
    </div>
  );
};

export default FootballAnalytics;
