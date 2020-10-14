import dayjs from 'dayjs';
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const BirthDay = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <View style={styles.singleField}>
        <Text style={styles.propName}>BirthDay </Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.date}>{dayjs(date).format('DD/MM/YYYY')}</Text>
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
