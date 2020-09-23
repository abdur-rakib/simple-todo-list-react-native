import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <View style={styles.container}>
      <AddTaskForm />
      <TaskList />
      {/* <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
export default Home;
