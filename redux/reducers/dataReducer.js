import {ADD_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK} from '../types';

const initialState = {
  tasks: [],
  singleTask: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      let taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      state.tasks[taskIndex] = {
        ...state.tasks[taskIndex],
        taskDescription: action.payload.taskDescription,
      };
      return {
        ...state,
      };
    default:
      return state;
  }
}
