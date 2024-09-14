import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme(); // Use the ThemeContext
    const { user, logout } = useAuth(); // Use the AuthContext

    return (
        <header>
            <h1>To-Do Application</h1>
            <button onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
            {user && <button onClick={logout}>Logout</button>}
        </header>
    );
};

export default Header;
