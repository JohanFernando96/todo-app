// Function to check if a task name is valid (non-empty and not a duplicate)
export const validateTaskName = (tasks, taskName) => {
    if (!taskName.trim()) {
        return { valid: false, error: 'Task name cannot be empty' };
    }

    const isDuplicate = tasks.some((task) => task.text.toLowerCase() === taskName.toLowerCase());

    if (isDuplicate) {
        return { valid: false, error: 'Task name already exists' };
    }

    return { valid: true, error: null };
};
