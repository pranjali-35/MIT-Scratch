import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';

const MidArea = ({handleRun}) => {
  const [droppedActions, setDroppedActions] = useState([]);

  const handleDrop = (item) => {
    setDroppedActions((droppedActions) => [...droppedActions, item]);
  };

  const onRunClick = () => {
    handleRun(droppedActions);
  };

  const onClearClick = () => {
    setDroppedActions([]);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'block',
    drop: handleDrop,
  }));

  useEffect(() => {
  }, [droppedActions]);

  return (
    <div>
      <div>
        Drag and Drop Actions Here
      </div>

      <div ref={drop} style={{ height: '400px', border: '1px solid black', width: '600px', marginBottom: '10px' }}>
        {droppedActions.map((action, index) => (
          <div key={index} style={{ padding: '10px' }}>
            {action.content}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{background: 'none', border: '1px solid blue', color: 'blue', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px'}} 
          onClick={onRunClick}>
            Run
        </button>

        <button style={{background: 'none', border: '1px solid blue', color: 'blue', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}} 
          onClick={onClearClick}>
            Clear
        </button>
      </div>
      
    </div>
  );
  
};

export default MidArea;
