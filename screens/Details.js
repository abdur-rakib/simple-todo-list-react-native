import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, Input, Overlay} from 'react-native-elements';
import {Button} from 'react-native-elements';

const Details = ({route}) => {
  const {task} = route.params;
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
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
        {text: 'Yes', onPress: () => console.log('OK Pressed')},
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
              backgroundColor: 'red',
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

export default Details;
