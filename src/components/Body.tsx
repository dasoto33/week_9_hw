import React from 'react';
import Main from './Main';

const App = () => {
  const concertTicketsData = [
    {
      concertName: 'ATLIENS',
      date: '2023-08-15',
      venue: 'Mission Ballroom',
      price: '$90',
    },
    {
      concertName: 'Subtronics',
      date: '2023-08-16',
      venue: 'Brooklyn Mirage',
      price: '$150',
    },
  ];

  return (
    <div>
      <Main concertTickets={concertTicketsData} />
    </div>
  );
};

export default App;