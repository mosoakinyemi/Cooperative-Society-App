import React from 'react';
import { AsyncStorage,StyleSheet, Text, View, TextInput,ActivityIndicator} from 'react-native';
import CounterApp from './CounterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

initialState={
  todo:[
    {
        id: 0,
        name: 'wake up early tomorrow morning',
     },
  ],
  count:0,
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
    return{ ...state, count:state.count + 1, todo:[...state.todo,{id:state.count, name:action.todo}]  }
    console.log(state.todo)
     default:
    return state
  }
 }

 const persistConfig = {
   key: 'root',
   storage,
 }

 const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer)
   const persistor = persistStore(store)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <CounterApp />
       </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9afaf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
