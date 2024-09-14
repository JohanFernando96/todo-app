import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
import Card from '../Card/Card'; // Import the Card component
import { useTodos } from '../../context/TodoContext'; // Access todo-related state from the context

const Dashboard = () => {
    const { todos } = useTodos(); // Get the list of to-do cards from the context
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [filter, setFilter] = useState('all'); // Filter state for categories (e.g., Critical, Default, Goals)

    // Sort and filter todos based on the selected category and priority
    useEffect(() => {
        let sortedTodos = [...todos];

        // Sort todos: Critical first, then Default, then Goals
        sortedTodos = sortedTodos.sort((a, b) => {
            const priorityOrder = {
                Critical: 1,
                Default: 2,
                Goals: 3,
            };
            return priorityOrder[a.category] - priorityOrder[b.category];
        });

        // Filter todos based on the selected category filter
        if (filter !== 'all') {
            sortedTodos = sortedTodos.filter((todo) => todo.category === filter);
        }

        setFilteredTodos(sortedTodos);
    }, [todos, filter]);

    // Handle filter changes (Critical, Default, Goals, All)
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>Your To-Do Lists</h1>
                <div className="filter-buttons">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => handleFilterChange('all')}
                    >
                        All
                    </button>
                    <button
                        className={filter === 'Critical' ? 'active' : ''}
                        onClick={() => handleFilterChange('Critical')}
                    >
                        Critical
                    </button>
                    <button
                        className={filter === 'Default' ? 'active' : ''}
                        onClick={() => handleFilterChange('Default')}
                    >
                        Default
                    </button>
                    <button
                        className={filter === 'Goals' ? 'active' : ''}
                        onClick={() => handleFilterChange('Goals')}
                    >
                        Goals
                    </button>
                </div>
            </div>

            <div className="dashboard-cards">
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <Card key={todo.id} card={todo} /> // Pass each todo card to the Card component
                    ))
                ) : (
                    <p>No to-do lists available</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
