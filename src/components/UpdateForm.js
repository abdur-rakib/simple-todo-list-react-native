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
import Ionicons from 'react-native-vector-icons/Ionicons';

import BirthDay from './BirthDay';

const UpdateForm = ({navigation, route, updateProfile}) => {
  const [gender, setGender] = useState('male');
  const [birthdate, setBirthdate] = useState(null);
  const [location, setLocation] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName(route.params.userName);
    setLocation(route.params.location);
    setGender(route.params.gender);
    if (route.params.birthdate) {
      setBirthdate(route.params.birthdate);
    }
  }, []);

  // const inputRef_1 = useRef(null);
  const inputRef_2 = useRef(null);

  const handleUpdate = () => {
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

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCancel}>
          <Ionicons name="close-outline" color="black" size={35} />
        </TouchableOpacity>
      </View>
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
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {/* <TouchableOpacity
          style={[styles.updateButton, {backgroundColor: 'dodgerblue'}]}
          onPress={handleCancel}>
          <Text style={{fontSize: 18, alignSelf: 'center', color: 'white'}}>
            Cancel Update
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
          <Text style={{fontSize: 18, alignSelf: 'center', color: 'white'}}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
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
    width: 150,
    marginVertical: 15,
    alignSelf: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  picker: {
    backgroundColor: 'teal',
  },
});
