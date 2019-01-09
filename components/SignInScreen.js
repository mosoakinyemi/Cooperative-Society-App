import React from 'react';
import {StatusBar,StyleSheet, View,Image,KeyboardAvoidingView,Netinfo} from 'react-native';
import { Container, Content,Button,Title, Text,Icon,ListItem,List,Left,Header,Right,Body,Card,CardItem,
        Form,Input,Item,Label} from "native-base";
import Expo from "expo";
import firebase from 'firebase';
import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux'
import {signInUser} from '../redux/actions.js';

 class SignInScreen extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

async  componentDidMount(){
    Netinfo.isConnected.addEventListener('connectionChange',this._handleOffline);
  }
async  componentWillUnmount(){
      Netinfo.isConnected.removeEventListener('connectionChange',this._handleOffline);
  }

  static navigationOptions = () => {
    return {
      title: ' SignIn ',
      headerStyle: {
          backgroundColor: 'rgba(2, 96, 148, 0.95)',
          },
      headerTintColor: '#fff',
    };
  };

  constructor(props) {
          super(props);
          this.state = {
                        loading: true,
                        text:'',
                        password:'',
                        email:'',
                        connected:false
                      };
                    }

    _signIn=()=>{
          const email=this.state.email;
          const password=this.state.password;
          if (this.props.isConnected){
            this.props.dispatch(signInUser(email,password))
            }
              alert(`You are not connected, please connect to the Internet`)
        };

  _handleOffline =(isConnected) =>{this.setState({connected:isConnected})};
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
        }
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}} enabled>
      <Container style={{backgroundColor: 'rgba(245, 246, 247, 0.97)', flexDirection:'column'}}>
        <View style={{flex: 1}}>
        {this.state.connected?(<OfflineBar />):null}
        <Image source={require('../assets/blueg.png')}
        style={{height:120,width:null,flex:1,padding: 0}} />
        </View>
        <View style={{alignItems:'flex-start',justifyContent:'space-between', flex: 2,
                        flexDirection: 'column',backgroundColor:'#ffffff',
                        margin:30,padding: 10}}>
            <Form>
              <Item style={{width:'100%',height:50, backgroundColor:'white',paddingVertical: 4,
                            borderRadius: 5,borderColor: '#e2e0dd', borderWidth: 1}} floatingLabel last>
                <Label>Username</Label>
                <Input onChangeText={(email) => this.setState({email})} />
               </Item>

             <Item style={{width:'100%',height:50, backgroundColor:'white',
              borderRadius:5,borderColor: '#e0dfdd', borderWidth: 2}} floatingLabel last>
                <Label>Password</Label>
                <Input onChangeText={(password) => this.setState({password})}/>
             </Item>
            </Form>

            <Button full style={{backgroundColor: '#0974af',borderRadius:4}}
                onPress={()=>this._signIn()}>
               <Text style={{color: 'white'}}>Login</Text>
             </Button>
             <Text style={{ alignSelf: 'center',
                        color:'#15b320',marginTop:15,}}> Dont have an account? </Text>
            <Button full bordered style={{marginTop:15,borderColor:'#15b320',borderRadius:4}}
              onPress={()=>this.props.navigation.navigate('RegistrationScreen')}>
             <Text style={{color:'#15b320'}}> Register </Text>
             </Button>
            </View>
        </Container>
        </KeyboardAvoidingView>
        );
      }
    }

    function  mapStateToProps(state){
      return state
    }

    export default connect(mapStateToProps)(SignInScreen);

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
      },
    })

    class OfflineBar extends React.Component {
      render(){
        return(
          <View style={{height:70, backgroundColor:rgb(142, 6, 6)}}>
          <Text style={{alignSelf: 'center',color:'white'}}> No internet connection</Text>
          </View>
        );
        }
    }
