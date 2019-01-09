import React from 'react';
import { AsyncStorage,StyleSheet, Text, View, TextInput,ActivityIndicator} from 'react-native';
import AppNavigator from './AppNavigator'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import firebase from "firebase";


initialState={
  UserEmail:'', errorCode:'',errorMessage:'',
  isLoading:false, userLoggedin:false,
  UserPassword:'', isConnected:false,
  UserCurrentBalance:50000,
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_USER':
    return{...state, uid:action.uid, };

    case 'USER_LOGGED_IN':
    return {...state, userLoggedIn:action.status};

    case 'IS_LOADING':
    return {...state, isLoading:action.status};

    default: return state;

  }
 }

 const persistConfig = {
   key: 'root',
   storage,
 }

 const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, applyMiddleware(thunk))
   const persistor = persistStore(store)

export default class App extends React.Component {
  componentWillMount(){
   const config = {
     apiKey: "AIzaSyDl5BLieNTVa0uG3G8iPjA2Q_pSW2neKXI",
     authDomain: "reactfire-a2923.firebaseapp.com",
     databaseURL: "https://reactfire-a2923.firebaseio.com",
     projectId: "reactfire-a2923",
     storageBucket: "reactfire-a2923.appspot.com",
     messagingSenderId: "440361178534"
   };
  if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
  }
   }

  render() {
    return (
      <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <AppNavigator />
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
