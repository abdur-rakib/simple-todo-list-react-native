import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteTask, updateTask} from '../redux/actions/dataActions';

const Details = ({route, data, deleteTask, updateTask}) => {
  const {task} = route.params;
  const navigation = useNavigation();

  const handleDelete = () => {
    deleteTask(task.id);
    navigation.navigate('Home');
  };

  const deleteAlert = () =>
    Alert.alert(
      '',
      'Are you sure to delete this task?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: handleDelete},
      ],
      {cancelable: true},
    );

  return (
    <View>
      <Card containerStyle={{borderRadius: 10}}>
        <Text style={styles.text}>{task.taskDescription}</Text>
        <Text style={{fontWeight: 'bold'}}>
          Updated: {moment(task.timestamp).fromNow()}
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Button
            buttonStyle={{
              height: 35,
              marginRight: 10,
              paddingRight: 15,
              backgroundColor: 'orangered',
            }}
            icon={{
              name: 'delete',
              size: 15,
              color: 'white',
            }}
            title="Delete"
            onPress={deleteAlert}
          />
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {fontSize: 18, textAlign: 'justify', color: 'gray'},
});
const mapStateToProps = (state) => {
  return {data: state.data};
};
const mapActionsToProps = {deleteTask, updateTask};

export default connect(mapStateToProps, mapActionsToProps)(Details);
