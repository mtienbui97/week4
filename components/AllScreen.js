import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

import {createStackNavigator} from 'react-navigation';

import {TODOS} from '../utils/data.js';
import {TodoItem} from './ToDoItem';
import DetailScreen from './DetailScreen.js';

//import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

class AllScreen extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      todoList: TODOS,
      inputText: '',
    };
    //console.log (todoList);
  }

  //change status
  onToggleTodo = id => {
    const {todoList} = this.state;
    const todo = todoList.find (item => item.id === id);
    todo.status = todo.status === 'Active' ? 'Done' : 'Done';
    const foundIndex = todoList.findIndex (todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    this.setState ({
      todoList: newTodoList,
    });

    //console.log ('hello');
    // setTimeout (() => {
    //   //console.log ('hello');
    //   this.props.navigation.navigate ('DetailScreen');
    // }, 50);
  };

  //delete
  onDeleteTodo = id => {
    const newTodoList = this.state.todoList.filter (todo => todo.id !== id);
    this.setState ({
      todoList: newTodoList,
    });
  };

  //input
  onChangeText = text => {
    this.setState ({
      inputText: text,
    });
  };
  //submit

  onSubmitTodo = () => {
    //console.log (this.state.todoList.lenght);
    const newTodo = {
      id: this.state.todoList.length + 1,
      status: 'Active',
      body: this.state.inputText,
    };

    const newTodoList = [...this.state.todoList, newTodo];
    this.setState ({
      todoList: newTodoList,
      inputText: '',
    });
  };

  render () {
    const {todoList, inputText} = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>

        {todoList.map (item => {
          return (
            <TodoItem
              key={item.body}
              todo={item}
              onToggleTodo={this.onToggleTodo}
              onDeleteTodo={this.onDeleteTodo}
            />
          );
        })}

        <View style={styles.inputContainer}>
          <TextInput
            value={inputText}
            style={styles.todoInput}
            onChangeText={text => this.onChangeText (text)}
          />
          <TouchableOpacity style={styles.button} onPress={this.onSubmitTodo}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#fff',
    //backgroundColor: 'black',
    justifyContent: 'center',
    paddingTop: 20,
  },
  todoItem: {
    margin: 5,
    padding: 10,
    minHeight: 50,
    width: '95%',
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap',
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  todoInput: {
    width: '95%',
    minHeight: 30,
    color: 'black',
    borderWidth: 1,
    marginTop: '20%',
    marginBottom: '5%',
    borderColor: 'grey',
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  button: {
    height: 50,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default AllScreen;
