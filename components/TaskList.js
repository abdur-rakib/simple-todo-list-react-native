import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const TaskList = ({data}) => {
  const navigation = useNavigation();
  useEffect(() => {}, [data.tasks]);
  return (
    <ScrollView>
      {data.tasks?.map((l, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate('Details', {task: l})}>
          <ListItem bottomDivider>
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
      ))}
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps)(TaskList);
