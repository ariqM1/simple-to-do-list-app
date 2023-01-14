import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const toDoNameRef = useRef()
    const { v4: uuidv4 } = require('uuid');

    useEffect( () => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect( () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleToDo(id) {
        const newToDos = [...todos]
        const todo = newToDos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newToDos)
    }

    function handleAddToDo(e) {
        const name = toDoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
        })

        toDoNameRef.current.value = null
    }

    return (
    <>
        <ToDoList todos={todos} toggleToDo = {toggleToDo} />
        <input ref={toDoNameRef} type="text" />
        <button onClick={handleAddToDo}> Add ToDos</button>
        <button>Clear Completed ToDos</button>
        <div>{todos.length} left to do </div>
    </>
    )
}

export default App;
