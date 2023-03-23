import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import Addtodo from './components/Addtodo';
import Sandbox from './components/Sandbox';

export default function App() {
  const[todos,setTodos]=useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the swith',key:'3'}
  ]);

  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }

  const submitHandler=(text)=>{
    if(text.length>3){
      setTodos((prevtodos)=>{
        return[
          {text:text , key:Math.random().toString()},
          ...prevtodos
        ];
      })
    } else {
      Alert.alert('Addtodo','must be more than 3 char long',[{text: 'Understand',onPress:()=>console.log('Alert Closed')}]);
    }
    
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler}/>
      
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item})=>(
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40,
    backgroundColor:'pink',
    flex:1
  },
  list:{
    marginTop:20,
    padding:40,
    backgroundColor:'yellow',
    flex:1,
  }
});
