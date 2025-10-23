import React from 'react';

const Log = ({ turns }) => {
  return (
    <ul>
      {turns.map((turn, index) => (
        <li key={index}>Player {turn.player} locaiton {turn.square.row} {turn.square.col}</li>
      ))}
    </ul>
  );
};

export default Log;
