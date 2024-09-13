Todo Management App
This is a simple Todo app I made using React for the frontend and Redux for managing the app’s state. You can use it to add tasks, mark them as important, mark them as completed, set due dates, and add notes. You can also delete tasks you don’t need anymore.

Features
Add new tasks
Mark tasks as completed or important
Add notes and due dates to tasks
Delete tasks
Login and logout
State management with Redux
Tech Stack
React: For building the user interface
Redux: To manage app state (like tasks and user authentication)
JavaScript/TypeScript: Main language for development
CSS: For styling the UI
Getting Started
Prerequisites
Make sure you have these installed:

Node.js (v14+)
npm or yarn
Steps to Run
Clone the project:

bash
Copy code
git clone https://github.com/your-username/todo-management-app.git
Move into the project folder:

bash
Copy code
cd todo-management-app
Install the dependencies:

bash
Copy code
npm install
# or
yarn install
Start the app:

bash
Copy code
npm start
# or
yarn start

Building for Production
To make the production build, use:

bash
Copy code
npm run build
# or
yarn build
The build files will be in the build folder.

Redux State
In this app, Redux handles two main things:

Tasks: A list of tasks with details like name, completed status, importance, notes, and due dates.
User Authentication: Handling if the user is logged in or not.
Actions
Here are the actions used in Redux:

ADD_TASK
TOGGLE_TASK_COMPLETED
ADD_NOTE_TO_TASK
TOGGLE_TASK_IMPORTANT
SET_DUE_DATE
DELETE_TASK
SET_USER
LOGIN
LOGOUT
Reducers
The reducers update the state based on the actions dispatched. Tasks and authentication states are handled by separate reducers combined using combineReducers.
