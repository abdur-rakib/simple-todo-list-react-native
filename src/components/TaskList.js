import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {ListItem, Icon, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {getTasks} from '../../src/redux/actions/dataActions';
// Picker
import {Picker} from '@react-native-community/picker';
import SingleTask from './SingleTask';

const TaskList = ({data, auth, getTasks}) => {
  const [selectedValue, setSelectedValue] = useState('all');
  useEffect(() => {
    getTasks(auth.userId, selectedValue);
    // setList((list) => data.tasks);
  }, [auth, selectedValue]);
  const renderTasks =
    data.tasks.length === 0 ? (
      <Text h4 h4Style={{textAlign: 'center', fontWeight: '300'}}>
        No tasks to show
      </Text>
    ) : (
      <FlatList
        keyboardShouldPersistTaps="always"
        data={data.tasks}
        renderItem={({item}) => <SingleTask item={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 150,
          alignSelf: 'center',
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="All" value="all" />
        <Picker.Item label="Incomplete" value="incomplete" />
        <Picker.Item label="Completed" value="completed" />
      </Picker>
      {renderTasks}
    </View>
  );
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

// import React, {useEffect, useState} from 'react';
// import {ScrollView, StyleSheet} from 'react-native';
// import {ListItem, Icon, Text} from 'react-native-elements';
// import {useNavigation} from '@react-navigation/native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {connect} from 'react-redux';
// import {getTasks} from '../redux/actions/dataActions';
// import CompleteButton from './CompleteButton';
// // Picker
// import {Picker} from '@react-native-community/picker';

// const TaskList = ({data, auth, getTasks}) => {
//   const [selectedValue, setSelectedValue] = useState('all');
//   const [taskList, setTaskList] = useState();
//   const navigation = useNavigation();
//   // console.log('render');
//   useEffect(() => {
//     getTasks(auth.userId);
//     if (selectedValue === 'all') {
//       setTaskList(data.tasks);
//     } else {
//       if (selectedValue === 'incomplete') {
//         setTaskList(data.tasks?.filter((task) => task.completed === false));
//       } else {
//         setTaskList(data.tasks?.filter((task) => task.completed === true));
//       }
//     }
//   }, [data, selectedValue]);
//   const renderTasks =
//     data.tasks.length === 0 ? (
//       <Text h4 h4Style={{textAlign: 'center', fontWeight: '300'}}>
//         No tasks to show
//       </Text>
//     ) : (
//       taskList?.map((l, i) => (
//         <ListItem key={i} bottomDivider style={{marginBottom: 5}}>
//           <ListItem.Content style={styles.listItemArea}>
//             <Icon
//               iconStyle={{color: 'dodgerblue', paddingRight: 6}}
//               name="rightcircleo"
//               type="antdesign"
//               size={19}
//             />
//             <TouchableOpacity
//               onPress={() => navigation.navigate('Details', {task: l})}>
//               <ListItem.Subtitle style={{fontSize: 18}}>
//                 {l.taskDescription}
//               </ListItem.Subtitle>
//             </TouchableOpacity>
//           </ListItem.Content>
//           <CompleteButton completed={l.completed} id={l.id} />
//         </ListItem>
//       ))
//     );
//   return (
//     <ScrollView>
//       <Picker
//         selectedValue={selectedValue}
//         style={{height: 50, width: 150}}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
//         <Picker.Item label="All" value="all" />
//         <Picker.Item label="Incomplete" value="incomplete" />
//         <Picker.Item label="Completed" value="completed" />
//       </Picker>
//       {renderTasks}
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   listItemArea: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });
// const mapStateToProps = (state) => {
//   return {
//     data: state.data,
//     auth: state.auth,
//   };
// };
// const mapActionsToProps = {getTasks};

// export default connect(mapStateToProps, mapActionsToProps)(TaskList);
