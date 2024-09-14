import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Custom hook to access ThemeContext values
const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;
