import {ADD_TASK} from '../types';

export const addTask = (taskDescription) => (dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: {taskDescription, completed: false, author: 'Rakib'},
  });
};
