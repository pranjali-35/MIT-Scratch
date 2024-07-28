import React, { useState, useEffect } from 'react';
import PositionedSprite from './PositionedSprite';

const PreviewArea = ({ position, direction, displayMessage }) => {
  const helloBoxStyle = {
    position: 'absolute',
    left: `${position.x+100}px`,
    top: `${position.y+30}px`,
    zIndex: 1, // Ensure it's on top
  };

  return (
    <div className="preview-area relative">
      <PositionedSprite position={position}  />
      {displayMessage && (
        <div  style = {helloBoxStyle} className="border border-black rounded p-2">
          <div>{displayMessage}</div>
        </div>
      )}
      
    </div>
  );
};

export default PreviewArea;
