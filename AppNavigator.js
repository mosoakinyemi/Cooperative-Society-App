import React from 'react';
import {createStackNavigator} from 'react-navigation';
import BalanceScreen from './components/BalanceScreen'
import HomeScreen from './components/HomeScreen'
import SignInScreen from './components/SignInScreen'
import RegistrationScreen from './components/RegistrationScreen'
import LoansScreen from './components/LoansScreen'
import TransfersScreen from './components/TransfersScreen'
import MakeContributionsScreen from './components/MakeContributionsScreen'




const AppNavigator = createStackNavigator({
  SignInScreen: {screen:SignInScreen},
  HomeScreen: {screen: HomeScreen},
  BalanceScreen: { screen: BalanceScreen },
  TransfersScreen:{screen:TransfersScreen},
  LoansScreen:{screen:LoansScreen},
  RegistrationScreen:{screen:RegistrationScreen},
  MakeContributionsScreen:{screen:MakeContributionsScreen}
  });



export default AppNavigator;
