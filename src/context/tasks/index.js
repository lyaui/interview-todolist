import { createContext, useContext, useReducer } from 'react';
import { DUMMY_DATA } from 'DUMMY_DATA.js';

const INIT_TASK_STATES = {
  isLoading: false,
  errorMessage: '',
  task: { content: '', isCompleted: false },
  tasks: [...DUMMY_DATA],
};

const TaskContext = createContext(INIT_TASK_STATES);

const taskReducer = (state = INIT_TASK_STATES, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [taskState, taskDispatch] = useReducer(taskReducer, INIT_TASK_STATES);
  const contextValue = { taskState, taskDispatch };
  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);
