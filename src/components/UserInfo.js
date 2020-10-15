import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import UserImage from './UserImage';

const UserInfo = ({auth: {userName, birthdate, gender, location, userId}}) => {
  const navigation = useNavigation();
  const handleEdit = () => {
    console.log('Update button pressed');
    navigation.navigate('Update', {
      userName,
      birthdate,
      gender,
      location,
      userId,
    });
  };
  return (
    <>
      <Text style={styles.title}>User Info</Text>
      <View style={styles.userInfo}>
        {/* <UserImage /> */}
        <Text style={styles.properties}>
          {' '}
          Full Name: <Text style={styles.value}>{userName}</Text>
        </Text>
        <Text style={styles.properties}>
          {' '}
          Birthday:
          <Text style={styles.value}>
            {birthdate
              ? dayjs(birthdate).format('DD/MM/YYYY')
              : 'Not added yet'}
          </Text>
        </Text>
        <Text style={styles.properties}>
          {' '}
          Gender: <Text style={styles.value}>{gender}</Text>
        </Text>
        <Text style={styles.properties}>
          {' '}
          Location:{' '}
          <Text style={styles.value}>
            {location === null ? 'Not added yet' : location}
          </Text>
        </Text>
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
    fontSize: 18,
    backgroundColor: 'lightgray',
    marginVertical: 5,
    paddingVertical: 5,
    width: '100%',
    // textAlign: 'center',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  updateButton: {
    backgroundColor: 'teal',
    width: 200,
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  value: {
    fontWeight: 'normal',
  },
});
