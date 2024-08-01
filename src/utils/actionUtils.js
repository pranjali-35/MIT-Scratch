export const ACTION_TYPES = {
    CHANGE_X: 'Change X by 10',
    CHANGE_Y: 'Change Y by 10',
    TURN_LEFT: 'Turn 15 degrees left',
    TURN_RIGHT: 'Turn 15 degrees right',
    SAY_HELLO: 'Say Hello',
    SAY_HELLO_2_SEC: 'Say Hello for 2 sec',
    SAY_HMM: 'Say Hmm',
    SAY_HMM_2_SEC: 'Say Hmm for 2 sec',
    WAIT: 'Wait 1 sec',
  };
  
  export const executeActions = (actions, handlers) => {
    const { handleMove, handleChangeY, handleTurn, handleDisplayMessage } = handlers;
  
    const execute = (remainingActions) => {
      if (remainingActions.length === 0) return;
  
      const action = remainingActions[0];
      const nextActions = remainingActions.slice(1);
  
      switch (action.content) {
        case ACTION_TYPES.CHANGE_X:
          handleMove(10);
          break;
        case ACTION_TYPES.CHANGE_Y:
          handleChangeY(10);
          break;
        case ACTION_TYPES.TURN_LEFT:
          handleTurn(-15);
          break;
        case ACTION_TYPES.TURN_RIGHT:
          handleTurn(15);
          break;
        case ACTION_TYPES.SAY_HELLO:
          handleDisplayMessage('Hello!');
          break;
        case ACTION_TYPES.SAY_HELLO_2_SEC:
          handleDisplayMessage('Hello!', 2000);
          break;
        case ACTION_TYPES.SAY_HMM:
          handleDisplayMessage('Hmm');
          break;
        case ACTION_TYPES.SAY_HMM_2_SEC:
          handleDisplayMessage('Hmm', 2000);
          break;
        case ACTION_TYPES.WAIT:
          setTimeout(() => {
            execute(nextActions);
          }, 1000);
          return;
        default:
          console.log(`Unknown action: ${action.content}`);
      }
  
      setTimeout(() => {
        execute(nextActions);
      }, 300);
    };
  
    execute([...actions]);
  };
  