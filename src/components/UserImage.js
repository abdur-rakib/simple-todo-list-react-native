import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {connect} from 'react-redux';

const UserImage = ({auth}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: `${auth.userImage}`,
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(UserImage);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginBottom: 10,
  },
});
