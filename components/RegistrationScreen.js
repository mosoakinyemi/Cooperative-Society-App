import React from 'react';
import {StatusBar,StyleSheet, View,KeyboardAvoidingView} from 'react-native';
import { Container,Content,Button,Title, Text,Icon,ListItem,List,Left,Header,Right,Body,
          Form,Label,Input,Item} from "native-base";
import Expo from "expo";
import {createStackNavigator} from 'react-navigation';
import {connect} from 'react-redux'
import {signInUser} from '../redux/actions.js';

 class RegistrationScreen extends React.Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  static navigationOptions = () => {
    return {
      title: ' RegistrationScreen ',
      headerStyle: {
          backgroundColor: '#15b320',
          },
      headerTintColor: '#fff',

    };
  };

  constructor(props) {
          super(props);
          this.state = {
                        loading: true,
                        text:'',
                        email:'',
                        password:''};
          }
    _register=()=>{
            const email=this.state.email;
            const password=this.state.password;
            if (this.props.isConnected){
              this.props.dispatch(registerUser(email,password))
                }
                alert(`You are not connected, please connect to the Internet`)
              };

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
        }
    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}} enabled>
        <Container style={styles.container}>
        <View style={{marginHorizontal: 5,marginVertical: 5}}>
            <Text style={{color:'#0974af', alignSelf: 'center',fontSize: 18}}>
              {`Create a free account with us
          and start saving for a
              better future`}
            </Text>
        </View>
        <Text style={{alignSelf: 'center'}}>Register</Text>
        <View style={{alignItems:'flex-start',justifyContent:'space-between',
                        flexDirection: 'column',backgroundColor:'white',
                        borderWidth: 1, borderRadius: 4,borderColor:'green',
                        margin:5,padding: 5}}>

            <Form>
              <Item style={{width:'100%',height:50, backgroundColor:'white',}} floatingLabel last>
                <Label><Text style={{color:'#e0600f'}}>*</Text>First Name</Label>
                <Input />
               </Item>

             <Item style={{width:'100%',height:50, backgroundColor:'white'}} floatingLabel last>
                <Label><Text style={{color:'#e0600f'}}>*</Text>Last Name</Label>
                <Input />
             </Item>

             <Item style={{width:'100%',height:50, backgroundColor:'white'}} floatingLabel last>
                <Label><Text style={{color:'#e0600f'}}>*</Text>Emai address</Label>
                <Input onChangeText={(email) => this.setState({email})} />
             </Item>

             <Item style={{width:'100%',height:50, backgroundColor:'white'}} floatingLabel last>
                <Label><Text style={{color:'#e0600f'}}>*</Text>Phone number</Label>
                <Input />
             </Item>

           <Item style={{width:'100%',height:50, backgroundColor:'white'}} floatingLabel last>
              <Label><Text style={{color:'#e0600f'}}>*</Text>Set your password</Label>
                <Input onChangeText={(password) => this.setState({password})}/>
             </Item>

            </Form>

        <View style={{flexDirection: 'row', padding: 10,alignItems: 'center',
                    alignItems: 'center',alignContent: 'center'}}>
        <Button success style={{borderRadius:4,marginRight: 30}}
         onPress={()=>this._register()}>
         <Text style={{color:'white',}}> Register </Text>
         </Button>
         <Button iconLeft info style={{borderRadius:4}} >
         <Icon name='ios-help-circle' />
          <Text style={{color:'white'}}> Help </Text>
          </Button>
        </View>
            </View>

                </Container>
          </KeyboardAvoidingView>
        );
      }
    }

    function  mapStateToProps(state){
      return state
    }

    export default connect(mapStateToProps)(RegistrationScreen);

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 10,
      },
    })
