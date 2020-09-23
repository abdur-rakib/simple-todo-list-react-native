import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;
