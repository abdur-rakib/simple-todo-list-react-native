import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

const AddTaskForm = () => {
  const handleAddTask = () => {
    console.log('Task Added');
  };
  return (
    <View style={styles.taskForm}>
      <Input
        containerStyle={{flex: 1}}
        placeholder="Add task"
        leftIcon={{name: 'add-task'}}
        leftIconContainerStyle={{paddingBottom: 6}}
      />
      <Button
        buttonStyle={{paddingHorizontal: 25, paddingVertical: 8}}
        title="Add"
        titleStyle={{fontSize: 20}}
        onPress={handleAddTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskForm: {
    marginVertical: 10,
    flexDirection: 'row',
  },
});

export default AddTaskForm;
