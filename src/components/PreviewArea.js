import React, { useState, useEffect } from 'react';
import PositionedSprite from './PositionedSprite';

const PreviewArea = ({ position, direction, displayHello, setDisplayHello }) => {
  const spriteWidth = '195.17898101806641'; 

  const helloBoxStyle = {
    position: 'absolute',
    top:  Number(position.y),
    right: Number(position.x) - Number(spriteWidth),
    zIndex: 1, // Ensure it's on top
  };

  useEffect(() => {
    if (displayHello) {
      const timerId = setTimeout(() => {
        setDisplayHello(false);
      }, 2000); // 2 seconds

      return () => clearTimeout(timerId);
    }
  }, [displayHello, setDisplayHello]); 
  
  return (
    <div className="preview-area relative">
      <PositionedSprite position={position}  />
      {displayHello && (
        <div  style = {helloBoxStyle} className="border border-black rounded p-2">
          <div>Hello!</div>
        </div>
      )}
      
    </div>
  );
};

export default PreviewArea;
