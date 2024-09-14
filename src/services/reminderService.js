// reminderService.js
export const setReminder = (task, reminderTime) => {
    const now = new Date().getTime();
    const timeUntilReminder = new Date(reminderTime).getTime() - now;

    if (timeUntilReminder > 0) {
        return setTimeout(() => {
            showReminderNotification(task);
        }, timeUntilReminder);
    }
    return null;
};

export const showReminderNotification = (task) => {
    // Simple alert for the reminder (you can extend this with more complex notifications)
    alert(`Reminder: ${task.text}`);
};

export const snoozeReminder = (task, snoozeTime) => {
    const snoozeDuration = snoozeTime * 60 * 60 * 1000; // Convert hours to milliseconds

    return setTimeout(() => {
        showReminderNotification(task);
    }, snoozeDuration);
};

export const cancelReminder = (reminderId) => {
    clearTimeout(reminderId);
};
