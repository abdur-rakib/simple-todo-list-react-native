import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions/dataActions';

const AddTaskForm = ({addTask, auth, UI}) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [error, setError] = useState(false);
  const handleAddTask = () => {
    if (taskDescription.trim().length >= 20) {
      const task = {
        taskDescription,
        authorName: auth.userName,
        authorImage: auth.userImage,
        authorId: auth.userId,
        completed: false,
        timestamp: new Date().toISOString(),
      };

      addTask(task);
      setTaskDescription('');
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <View style={styles.taskForm}>
      <TextInput
        style={styles.textInput}
        placeholder="Add task"
        leftIcon={{name: 'add-task'}}
        value={taskDescription}
        multiline
        onChangeText={(text) => setTaskDescription(text)}
      />
      {error && (
        <Text style={{color: 'red', fontSize: 18, marginBottom: 5}}>
          Task should be atleast 20 characters
        </Text>
      )}
      <Button
        disabled={UI.loading}
        loading={UI.loading}
        title="Add"
        onPress={handleAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskForm: {
    marginBottom: 10,
  },
  textInput: {
    height: 60,
    fontSize: 18,
  },
});
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    UI: state.UI,
  };
};
const mapActionsToProps = {
  addTask,
};

export default connect(mapStateToProps, mapActionsToProps)(AddTaskForm);
