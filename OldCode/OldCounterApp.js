import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,FlatList} from 'react-native';
import firebase from 'firebase'
import {connect} from 'react-redux'
class CounterApp extends React.Component {
state={
text:''
}

addTodo(todo){
  this.props.dispatch({type:'ADD_TODO',todo})
}
   render() {
    return (
      <View style={styles.container}>
          <View style={{marginBottom:50 ,flexDirection: 'row',backgroundColor: '#eaeaea',height:50, top:40}}>
                <TextInput style={{flex:1,height: 50,}}
                placeholder='e.g what would you like to do today?'
                onChangeText={(text) => this.setState({text})}/>

            <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
              <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <Text style={{fontSize: 30}}>+{this.props.count}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
          {
            this.props.todo.map((item, index) => (
               <TouchableOpacity
                  key = {item.name}
                    >

                  <Text style = {styles.text}>
                     {item.name}
                  </Text>
               </TouchableOpacity>
            ))
         }
          </View>
      </View>
    );
  }
}

function  mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,

  },
});
