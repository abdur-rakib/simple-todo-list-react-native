import {ADD_TASK, DELETE_TASK, UPDATE_TASK} from '../types';

const tasks = [
  {
    id: 1,
    taskDescription:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    completed: false,
    author: 'Abdur Rakib',
  },
  {
    id: 2,
    taskDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
    completed: false,
    author: 'Abdur Rakib',
  },
];
const initialState = {
  tasks: tasks,
  singleTask: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      // console.log(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      // console.log(state.tasks[0]);
      // console.log(action.payload.id);

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
