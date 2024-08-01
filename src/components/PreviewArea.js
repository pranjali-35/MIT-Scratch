import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import PositionedSprite from './PositionedSprite';

const PreviewArea = ({ position, setPosition, direction, displayMessage }) => {
  const [, drop] = useDrop({
    accept: 'sprite',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const newX = position.x + delta.x;
      const newY = position.y + delta.y;
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: newX,
        y: newY,
      }));
    },
  });

  const helloBoxStyle = {
    position: 'absolute',
    left: `${position.x + 100}px`,
    top: `${position.y + 30}px`,
  };

  return (
    <div ref={drop} className="preview-area relative" style={{ width: '100%', height: '100%' }}>
      <PositionedSprite position={position} direction={direction} />
      {displayMessage && (
        <div style={helloBoxStyle} className="border border-black rounded p-2">
          <div>{displayMessage}</div>
        </div>
      )}
    </div>
  );
};

export default PreviewArea;
