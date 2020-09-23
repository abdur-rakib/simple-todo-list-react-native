import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ListItem, Icon, Text, CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const TaskList = ({data}) => {
  const navigation = useNavigation();
  const renderTasks =
    data.tasks.length === 0 ? (
      <Text h4 h4Style={{textAlign: 'center', fontWeight: '300'}}>
        No tasks to show
      </Text>
    ) : (
      data.tasks?.map((l, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate('Details', {task: l})}>
          <ListItem bottomDivider style={{marginBottom: 5}}>
            <ListItem.Content style={styles.listItemArea}>
              <Icon
                iconStyle={{color: 'dodgerblue', paddingRight: 6}}
                name="rightcircleo"
                type="antdesign"
                size={19}
              />
              <ListItem.Subtitle style={{fontSize: 18, textAlign: 'justify'}}>
                {l.taskDescription}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))
    );
  return <ScrollView>{renderTasks}</ScrollView>;
};
const styles = StyleSheet.create({
  listItemArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(TaskList);
