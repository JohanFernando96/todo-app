import React, { createContext, useContext, useState } from 'react';

export const TodoContext = React.createContext();
export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        // Load saved todos from local storage
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // Save todos to local storage whenever the todos state changes
    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Function to add a new to-do list
    const addTodoList = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    // Function to delete a to-do list by id
    const deleteTodoList = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Function to update a to-do list (e.g., add/edit tasks)
    const updateTodoList = (updatedTodo) => {
        setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    };

    // Function to toggle the completion status of a to-do list
    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodoList,
                deleteTodoList,
                updateTodoList,
                toggleCompletion,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
