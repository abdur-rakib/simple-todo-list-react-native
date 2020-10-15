import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BirthDay = ({birthdate, setBirthdate}) => {
  // const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  useEffect(() => {}, [birthdate]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.log(date);
    setBirthdate(date);
    hideDatePicker();
  };
  // '2020-10-16T05:25:40.643Z'
  return (
    <View style={styles.container}>
      <View style={styles.singleField}>
        <Text style={styles.propName}>BirthDay </Text>
        <TouchableOpacity onPress={showDatePicker}>
          {/* <Text style={styles.date}>
            {dayjs(birthdate).format('DD/MM/YYYY')}
          </Text> */}
          <Text style={styles.date}>
            {birthdate ? dayjs(birthdate).format('DD/MM/YYYY') : '...loading'}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

export default BirthDay;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginVertical: 5,
    height: 60,
  },
  propName: {
    fontSize: 14,
    color: 'gray',
  },
  date: {
    fontSize: 16,
    paddingVertical: 4,
  },
});
