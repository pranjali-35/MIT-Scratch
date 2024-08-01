import React from 'react';
import { useDrag } from 'react-dnd';
import CatSprite from './CatSprite';

const PositionedSprite = ({ position, direction }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'sprite',
    item: { type: 'sprite', position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const rotationStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `rotate(${direction}deg)`,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'move',
  };

  return (
    <div ref={drag} style={rotationStyle}>
      <CatSprite />
    </div>
  );
};

export default PositionedSprite;
