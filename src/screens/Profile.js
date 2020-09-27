import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = ({navigation}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      console.log('Focused');
    }
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
