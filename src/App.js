import React, { useState, useRef } from 'react';
import ToDoList from './ToDoList';

function App() {
    const [todos, setTodos] = useState([])
    const toDoNameRef = useRef()

    function handleAddToDo(e) {
        const name = toDoNameRef.current.value
        if (name === '') return
        console.log(name)
    }

    return (
    <>
        <ToDoList todos={todos} />
        <input ref={toDoNameRef} type="text" />
        <button onClick={handleAddToDo}> Add ToDos</button>
        <button>Clear Completed ToDos</button>
        <div>0 left to do </div>
    </>
    )
}

export default App;
