import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {ListItem, Icon, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const TaskList = ({data}) => {
  const navigation = useNavigation();
  useEffect(() => {}, [data.tasks]);
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
            <ListItem.Content>
              <ListItem.Subtitle style={{fontSize: 18, textAlign: 'justify'}}>
                <Icon
                  iconStyle={{color: 'dodgerblue', paddingRight: 6}}
                  name="rightcircleo"
                  type="antdesign"
                  size={12}
                />
                {l.taskDescription}
              </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </TouchableOpacity>
      ))
    );
  return <ScrollView>{renderTasks}</ScrollView>;
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(TaskList);
