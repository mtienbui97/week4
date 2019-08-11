import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export const TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green',
  };
  onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert (
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log ('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => props.onDeleteTodo (todo.id)},
      ],
      {cancelable: true}
    );
  };
  return (
    <TouchableOpacity
      delayLongPress={4000}
      key={props.todo.body}
      style={[Styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo (props.todo.id)}
      onLongPress={() => onLongPress (props.todo)}
    >
      {/* <Text>{props.id}:{props.body}</Text> */}
      <Text style={Styles.todoText}>
        {parseInt (props.todo.id) + 1} : {props.todo.body}

      </Text>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create ({
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap',
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
