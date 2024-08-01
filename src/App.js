import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import { executeActions} from './utils/actionUtils';

function App() {
  const [droppedActions, setDroppedActions] = useState([]);
  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0, direction: 0 });
  const [displayMessage, setDisplayMessage] = useState('');

  const handleMove = (amount) => {
    setSpritePosition((prevPosition) => {
      const newPosition = {
        ...prevPosition,
        x: prevPosition.x + amount,
      };
      return newPosition;
    });
  };

  const handleChangeY = (amount) => {
    setSpritePosition((prevPosition) => ({
      ...prevPosition,
      y: prevPosition.y + amount,
    }));
  };
  
  const handleTurn = (degrees) => {     
    setSpritePosition((prevPosition) => ({
      ...prevPosition,
      direction: (prevPosition.direction + degrees + 360) % 360,
    }));
  };

  const handleDisplayMessage = (message, duration = 0) => {
    setDisplayMessage(message);
    if (duration > 0) {
      setTimeout(() => {
        setDisplayMessage('');
      }, duration);
    }
  };

  const resetSprite = () => {
    setSpritePosition({ x: 0, y: 0, direction: 0 });
    setDisplayMessage('');
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="bg-blue-100 pt-6 font-sans">
          <div className="h-screen overflow-hidden flex flex-row  ">
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar
              onMoveClick={handleMove}
              handleChangeY={handleChangeY}
              onTurnLeft={() => handleTurn(-15)}
              onTurnRight={() => handleTurn(15)}
              handleDisplayMessage={handleDisplayMessage}
              handleRun={(actions) => executeActions(actions, { handleMove, handleChangeY, handleTurn, handleDisplayMessage })}
            />
            <MidArea
              droppedActions={droppedActions}
              setDroppedActions={setDroppedActions}
              handleRun={(actions) => executeActions(actions, { handleMove, handleChangeY, handleTurn, handleDisplayMessage })}
              resetSprite={resetSprite}
            />
            </div>
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea position={spritePosition} setPosition={setSpritePosition} direction={spritePosition.direction} displayMessage={displayMessage}
              />            
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;