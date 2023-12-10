import React, { useReducer } from "react";

const initialTaskState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, count: state.count + 1 };
    case 'DELETE_TASK':
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case 'DELETE_ALL_TASKS':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default function Home() {
  const [taskState, dispatch] = useReducer(reducer, initialTaskState);

  const handleAddTask = () => {
    dispatch({ type: 'ADD_TASK' });
  };

  const handleDeleteTask = () => {
    dispatch({ type: 'DELETE_TASK' });
  };

  const handleDeleteAllTasks = () => {
    dispatch({ type: 'DELETE_ALL_TASKS' });
  };

  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={handleAddTask} id="addTaskBtn">Add a task</button>
      <button onClick={handleDeleteTask} id="delTaskBtn">Delete a task</button>
      <button onClick={handleDeleteAllTasks} id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>
    </div>
  );
}
