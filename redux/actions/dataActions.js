import {ADD_TASK, DELETE_TASK, UPDATE_TASK} from '../types';

export const addTask = (taskDescription) => (dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: {
      taskDescription,
      completed: false,
      author: 'Rakib',
      id: Math.random(),
    },
  });
};

export const deleteTask = (id) => (dispatch) => {
  dispatch({type: DELETE_TASK, payload: id});
};

export const updateTask = (id, taskDescription) => (dispatch) => {
  dispatch({type: UPDATE_TASK, payload: {id, taskDescription}});
};
