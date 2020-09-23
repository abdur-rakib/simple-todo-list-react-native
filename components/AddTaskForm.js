import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {addTask} from '../redux/actions/dataActions';

const AddTaskForm = ({addTask}) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [disable, setDisable] = useState(true);
  const handleAddTask = () => {
    addTask(taskDescription);
    setTaskDescription('');
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
      <Button disabled={false} title="Add" onPress={handleAddTask} />
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
  return {};
};
const mapActionsToProps = {
  addTask,
};

export default connect(mapStateToProps, mapActionsToProps)(AddTaskForm);
