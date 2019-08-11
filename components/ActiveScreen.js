import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../Styles';

export default class ActiveScreen extends React.Component {
  render () {
    return (
      <View style={Styles.homeScreen}>
        <Text>
          Active Screen
        </Text>
      </View>
    );
  }
}
