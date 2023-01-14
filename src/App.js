import React from 'react';
import ToDoList from './ToDoList';

function App() {
  return (
    <>
      <ToDoList />
      <input type="text" />
      <button> Add ToDos</button>
      <button>Clear Completed ToDos</button>
      <div>0 left to do </div>
    </>
  )
}

export default App;
