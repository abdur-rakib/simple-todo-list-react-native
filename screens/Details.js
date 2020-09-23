import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, Input, Overlay} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {deleteTask} from '../redux/actions/dataActions';

const Details = ({route, deleteTask}) => {
  const {task} = route.params;
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

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
      <Overlay
        onBackdropPress={toggleOverlay}
        isVisible={visible}
        overlayStyle={{
          width: '90%',
          minHeight: 100,
        }}
        onBackdropPress={toggleOverlay}>
        <>
          <Input value={task.taskDescription} multiline />
          <Button title="Update" />
        </>
      </Overlay>
      <Card>
        <Text style={{fontSize: 18, textAlign: 'justify', color: 'gray'}}>
          {task.taskDescription}
        </Text>
        <Text style={{fontWeight: 'bold'}}>Updated: 10/12/20</Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Button
            buttonStyle={{
              height: 35,
              marginRight: 10,
              paddingRight: 15,
            }}
            icon={{
              name: 'edit',
              size: 15,
              color: 'white',
            }}
            title="Edit"
            onPress={() => setVisible(true)}
          />
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
const mapStateToProps = (state) => {
  return {};
};
const mapActionsToProps = {deleteTask};

export default connect(mapStateToProps, mapActionsToProps)(Details);
