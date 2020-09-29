import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {Button, Icon, Overlay} from 'react-native-elements';
import {connect} from 'react-redux';
import {toggleComplete, updateTask} from '../redux/actions/dataActions';

const SingleTask = ({item, toggleComplete, updateTask}) => {
  //   console.log(item);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [taskDes, setTaskDes] = useState(item.taskDescription);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const handleUpdate = () => {
    updateTask(item.id, taskDes);
    toggleOverlay();
    console.log('Pressed');
  };
  return (
    <>
      <Overlay
        onBackdropPress={toggleOverlay}
        isVisible={visible}
        overlayStyle={{
          width: '90%',
          minHeight: 100,
        }}>
        <>
          <TextInput
            onChangeText={(text) => setTaskDes(text)}
            value={taskDes}
            multiline
            style={{height: 60, fontSize: 18}}
          />
          <Button title="Update" onPress={handleUpdate} />
        </>
      </Overlay>
      <View style={styles.container}>
        <View style={styles.checkArea}>
          {item.completed ? (
            <Icon
              iconStyle={{color: 'dodgerblue', paddingRight: 10}}
              name="checkbox-active"
              type="fontisto"
              size={19}
              onPress={() => toggleComplete(item.id, item.completed)}
            />
          ) : (
            <Icon
              iconStyle={{color: 'dodgerblue', paddingRight: 10}}
              name="checkbox-passive"
              type="fontisto"
              size={19}
              onPress={() => toggleComplete(item.id, item.completed)}
            />
          )}
        </View>
        <TouchableOpacity
          style={styles.contentArea}
          onPress={() => navigation.navigate('Details', {task: item})}>
          <Text
            style={[
              styles.text,
              item.completed && {textDecorationLine: 'line-through'},
            ]}>
            {item.taskDescription}
          </Text>
        </TouchableOpacity>
        <View style={styles.editArea}>
          <Icon
            iconStyle={{color: 'dodgerblue', paddingRight: 6}}
            name="edit"
            type="antdesign"
            size={19}
            onPress={toggleOverlay}
          />
        </View>
      </View>
    </>
  );
};
const mapActionsToProps = {toggleComplete, updateTask};

export default connect(null, mapActionsToProps)(SingleTask);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 8,
    minHeight: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  contentArea: {
    // flexGrow: 1,
    width: '80%',
  },
  text: {
    fontSize: 18,
  },
});
