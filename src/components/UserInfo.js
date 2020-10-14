import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UserInfo = ({setUpdate}) => {
  const handleEdit = () => {
    console.log('Update button pressed');
    setUpdate(true);
  };
  return (
    <>
      <Text style={styles.title}>User Info</Text>
      <View style={styles.userInfo}>
        <Text style={styles.properties}> Full Name: John Doe</Text>
        <Text style={styles.properties}> Birthday: 23/10/97</Text>
        <Text style={styles.properties}> Gender: Male</Text>
        <Text style={styles.properties}> Location: Rasjshahi</Text>
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleEdit}>
        <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
          Edit Profile
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
    alignSelf: 'center',
    borderBottomWidth: 2,
  },
  userInfo: {},
  properties: {
    fontSize: 20,
    backgroundColor: 'lightgray',
    marginVertical: 5,
    paddingVertical: 5,
    width: '100%',
    textAlign: 'center',
  },
  updateButton: {
    backgroundColor: 'teal',
    width: 200,
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
});