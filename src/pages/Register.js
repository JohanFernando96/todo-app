import React, { useState } from 'react';
import './Register.scss';
import useAuth from '../hooks/useAuth'; // Custom hook for accessing the authentication context
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Register = () => {
    const { login } = useAuth(); // Access the login function from AuthContext to simulate registration
    const [name, setName] = useState(''); // State for user name input
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirming password
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate(); // For redirecting users after successful registration

    // Handle the registration form submission
    const handleRegister = (e) => {
        e.preventDefault();

        // Basic validation (add more comprehensive validation as needed)
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Simulate registration (in a real app, you'd send a request to your API)
        login({ name, email }); // Simulate user registration by logging them in
        navigate('/dashboard'); // Redirect to the dashboard after registration
    };

    return (
        <div className="register-page">
            <h1>Create Account</h1>

            <form onSubmit={handleRegister} className="register-form">
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

                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
