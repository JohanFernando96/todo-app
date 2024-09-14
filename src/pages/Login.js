import React, { useState } from 'react';
import './Login.scss';
import useAuth from '../hooks/useAuth'; // Import as a default export
import { useNavigate } from 'react-router-dom'; // For redirecting users after successful login

const Login = () => {
    const { login } = useAuth(); // Access the login function from AuthContext
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // For redirecting users after successful login

    // Handle the login form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // Basic validation (add more comprehensive validation as needed)
        if (!email || !password) {
            setError('Email and password are required.');
            return;
        }

        // Mock user authentication (in a real app, you'd authenticate against an API)
        if (email === 'test@example.com' && password === 'password123') {
            login({ name: 'Test User', email }); // Simulate login by saving user details in context
            navigate('/dashboard'); // Redirect to the dashboard after login
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>

            <form onSubmit={handleLogin} className="login-form">
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

                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
