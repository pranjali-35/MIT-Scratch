import React from 'react';
import Icon from "./Icon";
import Block from './Block';

const Sidebar = ({ onMoveClick, onTurnLeft, onTurnRight, sayHello, displayHello, sayHelloFor2Seconds }) => {
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

    {/* {Motion} */}
    <div className="font-bold"> {"Motion"} </div>
    <Block content="Move 1 step" onClick={(onMoveClick)} />
    <Block content="Turn 15 degrees left" onClick={onTurnLeft} />
    <Block content="Turn 15 degrees right" onClick={onTurnRight} />

    <div className="font-bold"> {"Looks"} </div>
    <Block content="Say Hello" onClick={sayHello} />
    <Block content="Say Hello for 2 sec" onClick={sayHelloFor2Seconds} />
  </div>
  );
};

export default Sidebar;