import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      // Prevent default behavior
      e.preventDefault();
      console.log(e);
      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);
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
