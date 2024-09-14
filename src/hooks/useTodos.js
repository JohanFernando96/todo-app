import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

// Custom hook to access TodoContext values
const useTodos = () => {
    return useContext(TodoContext);
};

export default useTodos;
