import React, { useState } from 'react';
import './Modal.scss';
import { useTodos } from '../../context/TodoContext';

const Modal = ({ onClose, card }) => {
    const { updateTodoList } = useTodos(); // Function to update the to-do list
    const [newTask, setNewTask] = useState(''); // State for the new task input
    const [tasks, setTasks] = useState([...card.tasks]); // State for tasks (copied from the card)

    // Add a new task
    const handleAddTask = () => {
        if (newTask.trim() === '') return; // Prevent adding empty tasks
        const newTaskObject = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask('');
    };

    // Toggle task completion
    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    // Delete a task
    const handleDeleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    // Save the tasks (update the card in TodoContext)
    const handleSave = () => {
        updateTodoList({
            ...card,
            tasks,
        });
        onClose(); // Close the modal
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{card.name}</h2>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>

                <div className="task-list">
                    {tasks.map((task) => (
                        <div key={task.id} className="task-item">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)}
                            />
                            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                            <button className="delete-task" onClick={() => handleDeleteTask(task.id)}>
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

                <div className="task-input">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Add Task</button>
                </div>

                <div className="modal-footer">
                    <button onClick={handleSave} className="save-button">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
