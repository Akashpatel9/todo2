import { combineReducers } from "redux";
import { DELETE_TASK, LOGIN, LOGOUT, SET_DUE_DATE, TOGGLE_TASK_IMPORTANT } from "./action";

import {
  ADD_TASK,
  TOGGLE_TASK_COMPLETED,
  ADD_NOTE_TO_TASK,
} from "./action";


const initialStateAuth = {
  isAuthenticated: false,
};

// reducers/taskReducer.js

const initialState = {
  tasks: [], // Array to hold task objects
};

const taskReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state?.tasks,
          {
            id: new Date().getTime(), // Unique ID for each task
            name: action?.payload?.name,
            completed: false,
            notes: "",
            date:Date.now()
          },
        ],
      };

    case TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        tasks: state?.tasks?.map((task) =>// @ts-ignore
          task?.id === action?.payload?.taskId// @ts-ignore
            ? { ...task, completed: !task?.completed }
            : task
        ),
      };

      case TOGGLE_TASK_IMPORTANT:
      return {
        ...state,
        tasks: state?.tasks?.map((task) =>// @ts-ignore
          task?.id === action?.payload?.taskId// @ts-ignore
            ? { ...task, important: !task?.important }
            : task
        ),
      };

    case ADD_NOTE_TO_TASK:
      return {
        ...state,
        tasks: state?.tasks?.map((task) =>// @ts-ignore
          task?.id === action?.payload?.taskId// @ts-ignore
            ? { ...task, notes: action?.payload?.note }
            : task
        ),
      };

      case SET_DUE_DATE:
      return {
        ...state,
        tasks: state?.tasks?.map((task) =>
          // @ts-ignore
          task?.id === action?.payload?.taskId
          // @ts-ignore
            ? { ...task, dueDate: action?.payload?.dueDate }
            : task
        ),
      };

      case DELETE_TASK:
        return {
          ...state,// @ts-ignore
          tasks: state?.tasks?.filter((task) => task?.id !== action?.payload?.taskId),
        };
  

    default:
      return state;
  }
};

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, isAuthenticated: false };
    case LOGIN:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
});

export default appReducer;
