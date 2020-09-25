import React from 'react';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {toggleComplete} from '../redux/actions/dataActions';
import {Icon} from 'react-native-elements';

const CompleteButton = ({id, completed, toggleComplete}) => {
  const handleComplete = () => {
    toggleComplete(id, completed);
  };
  return (
    <>
      {completed ? (
        <Button
          buttonStyle={{
            height: 35,
            paddingRight: 15,
            backgroundColor: 'green',
            marginLeft: 20,
          }}
          title="Completed"
          onPress={handleComplete}
        />
      ) : (
        <Button
          buttonStyle={{
            height: 35,
            marginRight: 10,
            paddingRight: 15,
            backgroundColor: 'teal',
            marginLeft: 20,
          }}
          type="solid"
          title="Complete"
          onPress={handleComplete}
        />
      )}
    </>
  );
};
const mapActionsToProps = {toggleComplete};

export default connect(null, mapActionsToProps)(CompleteButton);
