import { useState, useRef } from 'react';
import Button from 'components/UI/Button.js';

const TaskInput = () => {
  const inputRef = useRef(null);
  const [inputState, setInputState] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);

  const changeInputHandler = () => {
    setInputState(inputRef.current.value);
    setIsInputValid(inputRef.current.value.trim().length > 0);
  };

  const ButtonStyle = isInputValid ? '' : 'cursor-not-allowed';
  return (
    <form className='my-1.5' onSubmit={(e) => e.preventDefault()}>
      <input
        ref={inputRef}
        value={inputState}
        onChange={changeInputHandler}
        className='h-8 w-80 px-1.5 border border-gray-500 rounded-sm'
        type='text'
      />
      <Button className={`${ButtonStyle} bg-blue hover:bg-blue-dark ml-3`}>新增</Button>
    </form>
  );
};

export default TaskInput;
