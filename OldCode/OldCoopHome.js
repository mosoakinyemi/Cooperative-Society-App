import React from 'react';
import {StatusBar, StyleSheet, View, TextInput, TouchableOpacity,FlatList,Image} from 'react-native';
import firebase from 'firebase'
import { Container, Content,Button,Title, Text,Icon,ListItem,List,Left,Header,Right,Body,} from "native-base";
import Expo from "expo";
import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux'
import Balance from './components/Balance.js'

 class Home extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  static navigationOptions = {header: null};

  constructor(props) {
          super(props);
          this.state = {
                        loading: true,
                        text:'' };
          }

    addTodo(todo){
    this.props.dispatch({type:'ADD_TODO',todo})
    }


  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container style={{marginTop:24 }}>
      <StatusBar hidden = {true} backgroundColor = "rgb(65, 162, 175)" translucent = {true}/>
        <Header style={{backgroundColor: '#fc560f'}}>
        <Body>
          <Icon name="menu" style={{color:'white'}} />
        </Body>
        </Header>
        <Content>
            <List>
                <List>
                  <Image source={require('./assets/docimg.png')}
                  style={{height:250,width:null,flex:1,padding: 0}} />
                </List>
                <List style={{backgroundColor:'#0bfac8',paddingVertical: 10}}>
                  <Left>
                  <Text style={{fontSize: 17,}}>Patient Management System</Text>
                  </Left>
              </List>
              <View style={{flex:1,flexDirection: 'column'}}>

                  <View style={{flexDirection: 'row',flex: 1,}}>
                      <Button vertical
                      style={styles.btnStyle}
                      onPress={()=>this.props.navigation.navigate('BalanceScreen')}
                      >
                      <Icon name="ios-book" style={styles.iconStyle} />
                        <Text> Balance</Text>
                      </Button>

                      <Button vertical
                      style={styles.btnStyle}
                      onPress={()=>this.props.navigation.navigate('MakeContributionScreen')}
                      >
                      <Icon name="ios-pricetag" style={styles.iconStyle} />
                        <Text>Make Contributions</Text>
                      </Button>

                     <Button vertical
                      style={styles.btnStyle}
                      onPress={()=>this.props.navigation.navigate('LoansScreen')}>
                          <Icon name="home" style={styles.iconStyle} />
                          <Text>Loan Applications</Text>
                      </Button>
                    </View>

                    <View style={{flexDirection: 'row',flex: 1,}}>
                        <Button vertical style={styles.btnStyle}
                         onPress={()=>this.props.navigation.navigate('TransfersScreen')}>
                            <Icon name="ios-swap" style={styles.iconStyle} />
                            <Text>Make Transfers</Text>
                        </Button>

                        <Button vertical style={styles.btnStyle}
                         onPress={()=>this.props.navigation.navigate('LoansScreen')}>
                             <Icon name="person-add" style={styles.iconStyle} />
                             <Text> New Patients </Text>
                         </Button>

                         <Button vertical style={styles.btnStyle}
                          onPress={()=>this.props.navigation.navigate('LoansScreen')}>
                              <Icon name="ios-mail" style={styles.iconStyle} />
                              <Text> Messages </Text>
                          </Button>
                      </View>
              </View>
            </List>
        </Content>
      </Container>
    );
  }
}



class Transfers extends React.Component {
  render(){
    return null;
    }
}

class Loans extends React.Component {
  render(){
    return(
      <Text> Loans Screen</Text>
    );
    }
}


class MakeContribution extends React.Component {
  render(){
    return(
      <Text> Add Appointments Screen</Text>
    );
    }
}


const AppNavigator = createStackNavigator({
  HomeScreen: {screen: Home},
  BalanceScreen: { screen: Balance },
  TransfersScreen:{screen:Transfers},
  LoansScreen:{screen:Loans},
  MakeContributionScreen:{screen:MakeContribution}
},
  {initialRoute:'PatientsScreen'}

  );

class AppHome extends React.Component {
  render(){
    return(
      <AppNavigator />
    );
  }
}
function  mapStateToProps(state){
  return state
}

export default connect(mapStateToProps)(AppHome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,

  },
  btnStyle:{
    backgroundColor: '#fc560f',
    height:100,
    width:null,
    borderWidth: 2,
    flex:1,
    borderColor: 'white'
  },
  iconStyle:{
    color:'#ffffff',
    fontSize:24
  },
});
