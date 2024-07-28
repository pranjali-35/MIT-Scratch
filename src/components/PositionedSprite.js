import React from 'react';
import CatSprite from './CatSprite';

const PositionedSprite = ({ position, direction }) => {
  const rotationStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `rotate(${position.direction}deg)`,
  };

  return (
    <div style={rotationStyle}>
      <CatSprite />
    </div>
  );
};

export default PositionedSprite;
