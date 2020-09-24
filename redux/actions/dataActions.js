import {db} from '../../firebase/utils';
import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_TASKS,
  SET_LOADING,
  CLEAR_LOADING,
} from '../types';

export const getTasks = (userId) => (dispatch) => {
  db()
    .collection('tasks')
    .orderBy('timestamp', 'desc')
    .where('authorId', '==', userId)
    .get()
    .then((querySnapshot) => {
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({id: doc.id, ...doc.data()});
      });
      dispatch({type: GET_TASKS, payload: tasks});
    });
};

export const addTask = (task) => (dispatch) => {
  dispatch({type: SET_LOADING});
  db()
    .collection('tasks')
    .add(task)
    .then(() => {
      dispatch({
        type: ADD_TASK,
        payload: task,
      });
      dispatch(() => dispatch({type: CLEAR_LOADING}));
    })
    .catch((err) => console.log('Error From addTask', err));
};

export const deleteTask = (id) => (dispatch) => {
  dispatch({type: DELETE_TASK, payload: id});
};

export const updateTask = (id, taskDescription) => (dispatch) => {
  dispatch({type: UPDATE_TASK, payload: {id, taskDescription}});
};
