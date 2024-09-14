// Function to sort tasks by completion status
export const sortTasksByCompletion = (tasks) => {
    return tasks.slice().sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    });
};

// Function to prioritize tasks by due date (earlier dates come first)
export const prioritizeTasksByDueDate = (tasks) => {
    return tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

// Function to reset completed tasks
export const resetCompletedTasks = (tasks) => {
    return tasks.map((task) => ({ ...task, completed: false }));
};
