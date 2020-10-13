import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <View style={styles.container}>
      <AddTaskForm />
      <TaskList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
});
export default Home;
