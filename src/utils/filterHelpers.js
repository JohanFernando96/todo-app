// Function to filter tasks by category
export const filterTasksByCategory = (tasks, category) => {
    if (category === 'all') return tasks;
    return tasks.filter((task) => task.category === category);
};
