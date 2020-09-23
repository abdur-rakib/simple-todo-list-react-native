import React from 'react';
import {View} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const tasks = [
  {
    id: 1,
    taskDescription:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    completed: false,
  },
  {
    id: 2,
    taskDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy',
    completed: false,
  },
  {
    id: 3,
    taskDescription:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a',
    completed: false,
  },
  {
    id: 4,
    taskDescription:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
    completed: false,
  },
];

const TaskList = () => {
  const navigation = useNavigation();
  return (
    <View>
      {tasks.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {task: l})}>
              <ListItem.Subtitle style={{fontSize: 18, textAlign: 'justify'}}>
                <Icon
                  iconStyle={{color: 'dodgerblue', paddingRight: 6}}
                  name="rightcircleo"
                  type="antdesign"
                  size={12}
                />
                {l.taskDescription}
              </ListItem.Subtitle>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default TaskList;
