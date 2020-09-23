import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {Button} from 'react-native-elements';

const Details = ({route}) => {
  const {task} = route.params;
  return (
    <Card>
      <Text style={{fontSize: 18, textAlign: 'justify', color: 'gray'}}>
        {task.taskDescription}
      </Text>
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
        />
      </View>
    </Card>
  );
};

export default Details;
