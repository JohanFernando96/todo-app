import React, { useState } from 'react';
import './Account.scss';
import useAuth from '../hooks/useAuth'; // Custom hook for accessing authentication context
import useTheme from '../hooks/useTheme'; // Custom hook for theme toggling

const Account = () => {
    const { user, logout } = useAuth(); // Access the user and logout function from AuthContext
    const { theme, toggleTheme } = useTheme(); // Access current theme and the theme toggle function
    const [name, setName] = useState(user?.name || ''); // Pre-fill the user name
    const [email, setEmail] = useState(user?.email || ''); // Pre-fill the user email
    const [message, setMessage] = useState(''); // To show update status

    // Handle the update of user info
    const handleSave = () => {
        if (!name.trim() || !email.trim()) {
            setMessage('Name and email cannot be empty.');
            return;
        }

        // Simulate saving user information locally
        const updatedUser = { ...user, name, email };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setMessage('Account details updated successfully.');
    };

    return (
        <div className="account-page container">
            <h1>Account Settings</h1>

            <div className="account-section">
                <h2>Personal Information</h2>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>

                <button onClick={handleSave} className="save-button">Save Changes</button>

                {message && <p className="message">{message}</p>}
            </div>

            <div className="account-section">
                <h2>App Settings</h2>

                <div className="theme-toggle-section">
                    <p>Theme: {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                    </button>
                </div>
            </div>

            <div className="account-section">
                <h2>Manage Account</h2>
                <button onClick={logout} className="logout-button">Logout</button>
            </div>
        </div>
    );
};

export default Account;
