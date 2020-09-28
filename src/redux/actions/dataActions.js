import {db} from '../../firebase/utils';
import {
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  GET_TASKS,
  SET_LOADING,
  CLEAR_LOADING,
  TOGGLE_COMPLETE,
} from '../types';

export const getTasks = (userId) => (dispatch) => {
  // console.log('called');
  db.collection('tasks')
    .orderBy('timestamp', 'desc')
    .where('authorId', '==', userId)
    .onSnapshot((querySnapshot) => {
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({id: doc.id, ...doc.data()});
      });
      dispatch({type: GET_TASKS, payload: tasks});
    });
};

export const addTask = (task) => (dispatch) => {
  console.log('Called');
  dispatch({type: SET_LOADING});
  db.collection('tasks')
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
  db.collection('tasks')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({type: DELETE_TASK, payload: id});
      console.log('Deleted successfully');
    });
};

export const updateTask = (id, taskDescription) => (dispatch) => {
  db.collection('tasks')
    .doc(id)
    .update({
      taskDescription,
      timestamp: new Date().toISOString(),
    })
    .then(() => {
      dispatch({
        type: UPDATE_TASK,
        payload: {id, taskDescription, timestamp: new Date().toISOString()},
      });
    })
    .catch((err) => console.log('Error from update task', err));
};

export const toggleComplete = (id, completed) => (dispatch) => {
  // dispatch({type: SET_LOADING});
  db.collection('tasks')
    .doc(id)
    .get()
    .then((doc) => {
      const completed_value = doc.data().completed;
      // console.log(doc);
      db.collection('tasks')
        .doc(id)
        .update({
          completed: !completed_value,
        })
        .then(() => {
          dispatch({type: TOGGLE_COMPLETE, payload: completed});
          // dispatch({type: CLEAR_LOADING});
        });
    });
};
