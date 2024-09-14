# To-Do List App

This is a **To-Do List App** built with **React** and **Material UI**. It allows users to register, log in, create and manage their to-do lists, and toggle between dark and light themes. The app also includes user settings for updating profile information.

## Features

- User authentication (login/register)
- Create, edit, and delete to-do lists
- Task management within to-do lists (mark as completed, add, delete)
- Dark and light mode theme toggle
- Responsive design using Material UI
- User settings page for updating profile information

## Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- **Node.js** (version 14.x or later)
- **npm** or **yarn** package manager

## Installation and Setup

Follow these steps to get the application up and running on your local machine:

### 1. Clone the Repository

`git clone https://github.com/yourusername/todo-app.git
cd todo-app`

### 2. Install Dependencies

Run the following command to install the project dependencies:

`npm install`

or, if you are using yarn:

`yarn install`

### 3. Run the Application

To start the application, run:

`npm start`

or, with yarn:

`yarn start`

This will start the application in development mode. Open http://localhost:3000 to view it in your browser.

### 4. Build the Application for Production

To create a production build of the app, run:

`npm run build`

or, with yarn:

`yarn build`

This will create an optimized build of your React application, which can be deployed to production.

## Additional Setup Steps

- **Local Storage**: The app stores user data (to-do lists, user settings) locally in the browser's `localStorage`. No additional database setup is needed.
- **Logo and Assets**: If you have custom assets (such as a logo), place them in the `src/assets` folder, and update the paths in the components accordingly.

## Folder Structure

The main directories and their purposes are:

- `src/`: Contains the main source code for the application.
- `src/components/`: Reusable components (e.g., buttons, modals, forms).
- `src/pages/`: Each page of the app (e.g., Dashboard, Login, UserSettings).
- `src/context/`: Context providers for global state management (e.g., theme, auth).
- `src/hooks/`: Custom React hooks (e.g., useAuth, useTodo).
- `src/assets/`: Static assets like images (e.g., logo).

## Technologies Used

- **React**: Frontend library
- **Material UI**: UI components and theming
- **Formik + Yup**: Form handling and validation
- **React Router**: Routing between pages
- **React Toastify**: Notifications and alerts
- **LocalStorage**: For persisting user data

## License

This project is licensed under the **MIT License**.
