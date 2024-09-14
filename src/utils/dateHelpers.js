// Function to format a date object as 'YYYY-MM-DD HH:mm'
export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    const hours = ('0' + d.getHours()).slice(-2);
    const minutes = ('0' + d.getMinutes()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

// Function to calculate the time difference between now and a given date in hours
export const calculateTimeDifferenceInHours = (date) => {
    const now = new Date();
    const targetDate = new Date(date);
    const diff = (targetDate - now) / (1000 * 60 * 60); // Convert milliseconds to hours
    return Math.max(0, diff.toFixed(2)); // Return 0 if the time has passed
};

// Function to check if a date is in the past
export const isPastDate = (date) => {
    const now = new Date();
    return new Date(date) < now;
};
