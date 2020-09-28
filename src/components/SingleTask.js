import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

const SingleTask = ({item}) => {
  //   console.log(item);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.checkArea}>
        {item.completed ? (
          <Icon
            iconStyle={{color: 'dodgerblue', paddingRight: 6}}
            name="checkbox-active"
            type="fontisto"
            size={19}
          />
        ) : (
          <Icon
            iconStyle={{color: 'dodgerblue', paddingRight: 6}}
            name="checkbox-passive"
            type="fontisto"
            size={19}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.contentArea}
        onPress={() => navigation.navigate('Details', {task: item})}>
        <Text style={styles.text}>{item.taskDescription}</Text>
      </TouchableOpacity>
      <View style={styles.editArea}>
        <Icon
          iconStyle={{color: 'dodgerblue', paddingRight: 6}}
          name="edit"
          type="antdesign"
          size={19}
        />
      </View>
    </View>
  );
};

export default SingleTask;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 8,
    minHeight: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  contentArea: {
    flexGrow: 1,
  },
  text: {
    fontSize: 18,
  },
});

{
  /* <Icon
              iconStyle={{color: 'dodgerblue', paddingRight: 6}}
              name="rightcircleo"
              type="antdesign"
              size={19}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {task: l})}>
              <ListItem.Subtitle style={{fontSize: 18}}>
                {l.taskDescription}
              </ListItem.Subtitle>
            </TouchableOpacity> */
}
