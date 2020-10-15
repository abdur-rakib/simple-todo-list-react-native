import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {updateProfile} from '../redux/actions/authActions';

import BirthDay from './BirthDay';

const UpdateForm = ({navigation, route, updateProfile}) => {
  const [gender, setGender] = useState('male');
  const [birthdate, setBirthdate] = useState(null);
  // const [birthdate, setBirthdate] = useState('2020-10-16T05:25:40.643Z');
  const [location, setLocation] = useState('');
  const [userName, setUserName] = useState('');
  console.log('Date', birthdate);

  // Key board isssue
  const _keyboardDidShow = useCallback(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, [navigation]);

  const _keyboardDidHide = useCallback(() => {
    navigation.setOptions({
      tabBarVisible: true,
    });
  }, [navigation]);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, [_keyboardDidHide, _keyboardDidShow]);

  useEffect(() => {
    setUserName(route.params.userName);
    setLocation(route.params.location);
    setGender(route.params.gender);
    if (route.params.birthdate) {
      setBirthdate(route.params.birthdate);
    }
  }, []);

  // console.log(route.params);
  // const inputRef_1 = useRef(null);
  const inputRef_2 = useRef(null);

  const handleUpdate = () => {
    // console.log('Update clicked');
    updateProfile(
      {
        userName,
        location,
        birthdate,
        gender,
      },
      route.params.userId,
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update your information</Text>
      <View style={styles.updateContainer}>
        <View style={styles.singleField}>
          <Text style={styles.propName}>Full Name </Text>
          <TextInput
            // ref={inputRef_1}
            style={styles.input}
            autoFocus={true}
            placeholder="Enter your fullname"
            returnKeyType="next"
            onSubmitEditing={() => inputRef_2.current.focus()}
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={styles.singleField}>
          <Text style={styles.propName}>Location </Text>
          <TextInput
            ref={inputRef_2}
            returnKeyType="next"
            style={styles.input}
            placeholder="Enter your location"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <BirthDay birthdate={birthdate} setBirthdate={setBirthdate} />
          <View
            style={[
              styles.singleField,
              {
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                width: '40%',
              },
            ]}>
            <Text style={styles.propName}>Gender </Text>
            <Picker
              mode="dialog"
              style={{width: 100}}
              selectedValue={gender}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={{fontSize: 20, alignSelf: 'center', color: 'white'}}>
          Update Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapActionsToProps = {updateProfile};

export default connect(mapStateToProps, mapActionsToProps)(UpdateForm);

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
    alignSelf: 'center',
    borderBottomWidth: 2,
  },
  singleField: {
    // flexDirection: 'row',
    marginVertical: 10,
  },
  propName: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 4,
    marginBottom: -10,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    flexGrow: 1,
    borderRadius: 5,
    // borderColor: 'lightgray',
    borderBottomColor: 'lightgray',
  },
  updateButton: {
    backgroundColor: 'teal',
    width: 200,
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  picker: {
    backgroundColor: 'teal',
  },
});
