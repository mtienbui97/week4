import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DetailScreen extends React.Component {
  constructor (props) {
    super (props), this.state ({});
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>
          Active Screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 50,
  },
});
