import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Tasks</Text>
      </View>
      <AddTaskForm />
      <TaskList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    alignSelf: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 28,
  },
});
export default Home;
