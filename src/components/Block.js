import React from 'react';
import { useDrag } from 'react-dnd';

const Block = ({ content, onClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'block',
    item: { content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-1 mb-1 rounded"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Block;