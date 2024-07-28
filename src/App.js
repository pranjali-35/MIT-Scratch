import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';

function App() {
  const [droppedActions, setDroppedActions] = useState([]);
  const [spritePosition, setSpritePosition] = useState({ x: 0, y: 0, direction: 0 });
  const [displayHello, setDisplayHello] = useState(false);

  const handleMove = () => {   
    setSpritePosition((prevPosition) => ({
    ...prevPosition,
    x: prevPosition.x + 1,
    y: prevPosition.y,
    }));
  };

  const handleTurn = (degrees) => {     
    setSpritePosition((prevPosition) => ({
      ...prevPosition,
      direction: (prevPosition.direction + degrees + 360) % 360,
    }));
  };

  const sayHello = () => {
    setDisplayHello(true);
  };

  const sayHelloFor2Seconds = () => {
    setDisplayHello(true);
    const timerId = setTimeout(() => {
      setDisplayHello(false);
    }, 2000);
    return () => clearTimeout(timerId);
  };

  const handleRun = (droppedActions) => {
    droppedActions.forEach(action => {
      console.log(action.content)
      if(action.content === 'Move 1 step') {
        handleMove();
        console.log('Moved 1 step')
      } else if (action.content === 'Turn 15 degrees left') {
        handleTurn(-15);
        console.log('turned 15 degrees left')
      } else if (action.content === 'Turn 15 degrees right') {
        handleTurn(15);
        console.log('turned 15 degrees right')
      } else if (action.content === 'Say Hello') {
        sayHello();
      } else if (action.content === 'Say Hello for 2 sec') {
        sayHelloFor2Seconds();
      }
    });
  };
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="bg-blue-100 pt-6 font-sans">
          <div className="h-screen overflow-hidden flex flex-row  ">
            <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
              <Sidebar onMoveClick={handleMove} onTurnLeft={() => handleTurn(-15)} onTurnRight={() => handleTurn(15)} sayHello={sayHello} displayHello={displayHello} sayHelloFor2Seconds={sayHelloFor2Seconds} />
              <MidArea droppedActions={droppedActions} setDroppedActions={setDroppedActions} handleRun={handleRun} />
            </div>
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea position={spritePosition} direction={spritePosition.direction} displayHello={displayHello} />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;