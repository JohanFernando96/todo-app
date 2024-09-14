import React, { useState } from 'react';
import './TodoList.scss';
import useTodos from '../hooks/useTodos'; // Custom hook for accessing the to-do context
import Card from '../components/Cards/Card'; // Component to display individual to-do cards

const TodoList = () => {
    const { todos, addTodoList } = useTodos(); // Get todos and function to add a new to-do list
    const [newTodoName, setNewTodoName] = useState(''); // State for new to-do name
    const [error, setError] = useState(''); // State for error messages

    // Handle adding a new to-do list
    const handleAddTodoList = (e) => {
        e.preventDefault();

        if (!newTodoName.trim()) {
            setError('To-do name cannot be empty.');
            return;
        }

        const newTodo = {
            id: Date.now(),
            name: newTodoName,
            description: '',
            category: 'Default', // Default category, can be changed in the card
            tasks: [],
            completed: false
        };

        addTodoList(newTodo); // Add new to-do to the list
        setNewTodoName(''); // Clear the input field
        setError('');
    };

    return (
        <div className="todolist-page container">
            <h1>Your To-Do Lists</h1>

            <form onSubmit={handleAddTodoList} className="add-todo-form">
                <div className="input-group">
                    <input
                        type="text"
                        value={newTodoName}
                        onChange={(e) => setNewTodoName(e.target.value)}
                        placeholder="Enter new to-do list name"
                    />
                    <button type="submit" className="add-todo-button">Add To-Do</button>
                </div>
                {error && <p className="error-message">{error}</p>}
            </form>

            <div className="todo-list">
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <Card key={todo.id} card={todo} /> // Display each to-do list as a card
                    ))
                ) : (
                    <p>No to-do lists available. Add a new to-do list!</p>
                )}
            </div>
        </div>
    );
};

export default TodoList;
