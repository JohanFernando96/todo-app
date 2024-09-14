import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import Header from './components/Header/Header';
import { TodoProvider } from './context/TodoContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TodoProvider>
          <Router>
            <Header />
            <div className="container">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<TodoList />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </div>
          </Router>
        </TodoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
