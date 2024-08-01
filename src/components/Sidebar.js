import React, { useState, useEffect } from 'react';
import Icon from "./Icon";
import Block from './Block';
import { ACTION_TYPES } from '../utils/actionUtils';

const Sidebar = ({ onMoveClick, handleChangeY, onTurnLeft, onTurnRight, handleDisplayMessage, handleRun}) => {
  const [clickedBlocks, setClickedBlocks] = useState([]);

  const handleBlockClick = (content, onClick) => {
    setClickedBlocks((prevClickedBlocks) => {
      const newClickedBlocks = [...prevClickedBlocks, content];
      if (newClickedBlocks.length > 5) {
        newClickedBlocks.shift();
      }
      return newClickedBlocks;
    });
    onClick();
  };

  useEffect(() => {
  }, [clickedBlocks]);


  return (
  <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
    <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
    <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
      {"When this sprite clicked"}
    </div>

    <div className="font-bold">Motion</div>
      <Block content={ACTION_TYPES.CHANGE_X} onClick={() => handleBlockClick(ACTION_TYPES.CHANGE_X, () => onMoveClick(10))} />
      <Block content={ACTION_TYPES.CHANGE_Y} onClick={() => handleBlockClick(ACTION_TYPES.CHANGE_Y, () => handleChangeY(10))} />
      <Block content={ACTION_TYPES.TURN_LEFT} onClick={() => handleBlockClick(ACTION_TYPES.TURN_LEFT, onTurnLeft)} />
      <Block content={ACTION_TYPES.TURN_RIGHT} onClick={() => handleBlockClick(ACTION_TYPES.TURN_RIGHT, onTurnRight)} />

      <div className="font-bold">Looks</div>
      <Block content={ACTION_TYPES.SAY_HELLO} onClick={() => handleBlockClick(ACTION_TYPES.SAY_HELLO, () => handleDisplayMessage('Hello!'))} />
      <Block content={ACTION_TYPES.SAY_HELLO_2_SEC} onClick={() => handleBlockClick(ACTION_TYPES.SAY_HELLO_2_SEC, () => handleDisplayMessage('Hello!', 2000))} />
      <Block content={ACTION_TYPES.SAY_HMM} onClick={() => handleBlockClick(ACTION_TYPES.SAY_HMM, () => handleDisplayMessage('Hmm'))} />
      <Block content={ACTION_TYPES.SAY_HMM_2_SEC} onClick={() => handleBlockClick(ACTION_TYPES.SAY_HMM_2_SEC, () => handleDisplayMessage('Hmm', 2000))} />

      <div className="font-bold">Control</div>
      <Block content={ACTION_TYPES.WAIT} onClick={() => handleBlockClick(ACTION_TYPES.WAIT, () => {})} />

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-1 mb-1 rounded"
        onClick={() => handleRun(clickedBlocks.map((content) => ({ content })))}
      >
        Execute Last 5 Actions
      </button>
  </div>
  );
};

export default Sidebar;