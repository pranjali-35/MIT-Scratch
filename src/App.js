import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';

function App() {
  const [droppedActions, setDroppedActions] = useState([]);
  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0, direction: 0 });
  const [displayMessage, setDisplayMessage] = useState('');

  const handleMove = () => {   
    setSpritePosition((prevPosition) => ({
    ...prevPosition,
    x: prevPosition.x + 10,
    y: prevPosition.y,
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

  const handleRun = (droppedActions) => {
    droppedActions.forEach((action, index) => {
      setTimeout(() => {
        switch (action.content) {
          case 'Move 10 steps':
            handleMove();
            break;
          case 'Turn 15 degrees left':
            handleTurn(-15);
            break;
          case 'Turn 15 degrees right':
            handleTurn(15);
            break;
          case 'Say Hello':
            handleDisplayMessage('Hello!');
            break;
          case 'Say Hello for 2 sec':
            handleDisplayMessage('Hello!', 2000);
            break;
          case 'Say Hmm':
            handleDisplayMessage('Hmm');
            break;
          case 'Say Hmm for 2 sec':
            handleDisplayMessage('Hmm', 2000);
            break;
          default:
            console.log(`Unknown action: ${action.content}`);
        }
      }, index * 1000);
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="bg-blue-100 pt-6 font-sans">
          <div className="h-screen overflow-hidden flex flex-row  ">
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
              <Sidebar onMoveClick={handleMove} onTurnLeft={() => handleTurn(-15)} onTurnRight={() => handleTurn(15)} handleDisplayMessage={handleDisplayMessage} />
              <MidArea droppedActions={droppedActions} setDroppedActions={setDroppedActions} handleRun={handleRun} />
            </div>
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea position={spritePosition} direction={spritePosition.direction} displayMessage={displayMessage} />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;