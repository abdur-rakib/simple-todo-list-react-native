import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {toggleComplete} from '../redux/actions/dataActions';

const SingleTask = ({item, toggleComplete}) => {
  //   console.log(item);
  const navigation = useNavigation();
  return (
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
      {/* <View style={styles.editArea}>
        <Icon
          iconStyle={{color: 'dodgerblue', paddingRight: 6}}
          name="edit"
          type="antdesign"
          size={19}
        />
      </View> */}
    </View>
  );
};
const mapActionsToProps = {toggleComplete};

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
    width: '96%',
  },
  text: {
    fontSize: 18,
  },
});
