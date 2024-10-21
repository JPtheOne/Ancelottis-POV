import React from 'react';
import SquadBuilder from 'react-squad-builder';

const SquadBuilderTest = () => {
  const players = [
    {
      id: 1,
      positionType: 'goalkeeper',
      alternativePositions: '',
      name: 'Gianluigi Donnarumma',
      shirtNumber: 21
    },
    {
      id: 2,
      positionType: 'midfielder',
      alternativePositions: 'attacker',
      name: 'Dominik Szoboszlai',
      shirtNumber: 8
    }
  ];

  return (
    <div>
      <h1>Squad Builder Test</h1>
      <SquadBuilder players={players} />
    </div>
  );
};

export default SquadBuilderTest;
