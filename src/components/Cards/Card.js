import React, { useState } from 'react';
import './Card.scss';
import { useTodos } from '../../context/TodoContext';
import Modal from '../Modal/Modal'; // For displaying the pop-up with task details

const Card = ({ card }) => {
    const { deleteTodoList, updateTodoList, toggleCompletion } = useTodos(); // Assuming these functions are in TodoContext
    const [isModalOpen, setIsModalOpen] = useState(false); // For opening and closing the modal
    const [editMode, setEditMode] = useState(false); // To toggle between edit and view mode for the card details
    const [newCardDetails, setNewCardDetails] = useState({
        name: card.name,
        description: card.description,
        category: card.category,
    }); // For handling card edits

    // Toggle the modal to show task details
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Handle deleting the card
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this card?')) {
            deleteTodoList(card.id); // Delete based on card id
        }
    };

    // Handle editing the card (name, description, category)
    const handleEdit = () => {
        setEditMode(true);
    };

    // Save the edited card details
    const handleSave = () => {
        updateTodoList({ ...card, ...newCardDetails });
        setEditMode(false); // Exit edit mode
    };

    // Toggle the completion status of the entire card
    const toggleCardCompletion = () => {
        toggleCompletion(card.id); // Assuming this function toggles card completion
    };

    return (
        <div className={`card ${card.category.toLowerCase()}`}>
            <div className="card-header">
                {editMode ? (
                    <>
                        <input
                            type="text"
                            value={newCardDetails.name}
                            onChange={(e) =>
                                setNewCardDetails({ ...newCardDetails, name: e.target.value })
                            }
                        />
                        <textarea
                            value={newCardDetails.description}
                            onChange={(e) =>
                                setNewCardDetails({ ...newCardDetails, description: e.target.value })
                            }
                        />
                        <select
                            value={newCardDetails.category}
                            onChange={(e) =>
                                setNewCardDetails({ ...newCardDetails, category: e.target.value })
                            }
                        >
                            <option value="Critical">Critical</option>
                            <option value="Default">Default</option>
                            <option value="Goals">Goals</option>
                        </select>
                    </>
                ) : (
                    <>
                        <h2>{card.name}</h2>
                        <p>{card.description}</p>
                        <span className={`category-tag ${card.category.toLowerCase()}`}>
                            {card.category}
                        </span>
                    </>
                )}
            </div>

            <div className="card-footer">
                <button onClick={openModal}>View Tasks</button>
                <button onClick={handleDelete}>Delete</button>
                {editMode ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
                <button onClick={toggleCardCompletion}>
                    {card.completed ? 'Unmark Complete' : 'Mark Complete'}
                </button>
            </div>

            {isModalOpen && (
                <Modal onClose={closeModal} card={card}>
                    {/* Pass the card details to Modal for displaying tasks */}
                </Modal>
            )}
        </div>
    );
};

export default Card;
