import React, { useState } from 'react';
import './Task.scss';

const Task = ({ task, onToggleComplete, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false); // Track if the task is being edited
    const [taskText, setTaskText] = useState(task.text); // Local state for task text when editing

    // Toggle the task editing mode
    const handleEditToggle = () => {
        if (isEditing) {
            // Save edited task text when exiting edit mode
            onEdit(task.id, taskText);
        }
        setIsEditing(!isEditing);
    };

    // Handle task text changes during editing
    const handleTaskChange = (e) => {
        setTaskText(e.target.value);
    };

    return (
        <div className="task">
            <div className="task-left">
                {/* Task checkbox to mark as complete/incomplete */}
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={taskText}
                        onChange={handleTaskChange}
                        className="task-edit-input"
                    />
                ) : (
                    <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                )}
            </div>

            <div className="task-right">
                {/* Edit button toggles between editing and saving */}
                <button className="edit-task" onClick={handleEditToggle}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                {/* Delete button */}
                <button className="delete-task" onClick={() => onDelete(task.id)}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Task;
