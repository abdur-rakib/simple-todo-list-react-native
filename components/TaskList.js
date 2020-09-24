import React, {useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {ListItem, Icon, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getTasks} from '../redux/actions/dataActions';
import CompleteButton from './CompleteButton';

const TaskList = ({data, auth, getTasks}) => {
  const navigation = useNavigation();
  // console.log(data.tasks);
  useEffect(() => {
    getTasks(auth.userId);
  }, [data]);
  const renderTasks =
    data.tasks.length === 0 ? (
      <Text h4 h4Style={{textAlign: 'center', fontWeight: '300'}}>
        No tasks to show
      </Text>
    ) : (
      data.tasks?.map((l, i) => (
        <ListItem key={i} bottomDivider style={{marginBottom: 5}}>
          <ListItem.Content style={styles.listItemArea}>
            <Icon
              iconStyle={{color: 'dodgerblue', paddingRight: 6}}
              name="rightcircleo"
              type="antdesign"
              size={19}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {task: l})}>
              <ListItem.Subtitle style={{fontSize: 18, textAlign: 'justify'}}>
                {l.taskDescription}
              </ListItem.Subtitle>
            </TouchableOpacity>
          </ListItem.Content>
          <CompleteButton completed={l.completed} id={l.id} />
        </ListItem>
      ))
    );
  return <ScrollView>{renderTasks}</ScrollView>;
};
const styles = StyleSheet.create({
  listItemArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
const mapStateToProps = (state) => {
  return {
    data: state.data,
    auth: state.auth,
  };
};
const mapActionsToProps = {getTasks};

export default connect(mapStateToProps, mapActionsToProps)(TaskList);
