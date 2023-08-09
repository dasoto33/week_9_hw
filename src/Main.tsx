import React from 'react';

export const Main = (props) => {
  const { concertTickets } = props;

  return (
    <div>
      <h2>Concert Tickets</h2>
      <ul>
        {concertTickets.map((ticket, index) => (
          <li key={index}>
            <div>{ticket.concertName}</div>
            <div>Date: {ticket.date}</div>
            <div>Venue: {ticket.venue}</div>
            <div>Price: {ticket.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;