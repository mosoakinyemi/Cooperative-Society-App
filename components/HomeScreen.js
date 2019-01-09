import React from 'react';
import {StatusBar, StyleSheet, View, TextInput,Image,} from 'react-native';
import { Container, Content,Button,Title, Text,Icon,ListItem,List,Left,Header,Right,Body} from "native-base";
import Expo from "expo";
import {connect} from 'react-redux'


 class HomeScreen extends React.Component {

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
              this.state = {loading: true, text:'',
                          loggedIn:false, isSelected:false };
                  }

  render() {
    if (this.state.loading) {
        return <Expo.AppLoading />;
      }
    return (
        <Container style={{marginTop:24 }}>
        <StatusBar hidden = {true} backgroundColor = "rgb(65, 162, 175)" translucent = {true}/>
          <Header style={{backgroundColor: 'rgba(2, 96, 148, 0.95)',}}>
          <Body>
            <Icon name="menu" style={{color:'white'}} />
          </Body>
          </Header>
          <Content style={{backgroundColor: 'rgba(221, 221, 221, 0.95)'}}>
              <List style={{flex: 1}}>
                  <List>
                    <Image source={require('../assets/docimg.png')}
                    style={{height:150,width:null,flex:1,padding: 0}} />
                  </List>
                  <List
                  style={{backgroundColor:'#15b320',paddingVertical: 10,flex: 1,paddingHorizontal: 10}}>
                    <Left style={{alignContent: 'space-between',flexDirection: 'row'}}>
                    <Text style={{fontSize: 20,color:'white',flex: 1}}>Welcome, User</Text>
                    <Text style={{fontSize: 20,color:'white',flex: 1}}>
                    Balance: {'\u20A6'}{this.props.UserCurrentBalance}</Text>
                    </Left>
                </List>
                <View style={{flex:2,flexDirection: 'column',
                padding: 15,backgroundColor: 'rgba(221, 221, 221, 0.95)'}}>

                    <View style={{flexDirection: 'row',flex: 1,}}>
                        <Button vertical
                        style={styles.btnStyle}
                        onPress={()=>this.props.navigation.navigate('BalanceScreen')}
                        >
                        <Icon name="ios-book" style={styles.iconStyle} />
                          <Text  style={styles.btnText}>Balance</Text>
                        </Button>


                        <Button vertical
                        style={styles.btnStyle}
                        onPress={()=>this.props.navigation.navigate('MakeContributionScreen')}
                        >
                        <Icon name="ios-pricetag" style={styles.iconStyle} />
                          <Text>{`Make
                             Contributions`}</Text>
                        </Button>

                        <Button vertical
                        style={styles.btnStyle}
                        onPress={()=>this.props.navigation.navigate('LoansScreen')}>
                            <Icon name="home" style={styles.iconStyle} />
                            <Text>{`Loans`}</Text>
                        </Button>
                      </View>

                      <View style={{flexDirection: 'row',flex: 1,}}>
                          <Button vertical style={styles.btnStyle}
                           onPress={()=>this.props.navigation.navigate('TransfersScreen')}>
                              <Icon name="ios-swap" style={styles.iconStyle} />
                              <Text  style={styles.btnText}>
                              {`Transfers`}
                              </Text>
                          </Button>

                          <Button vertical style={styles.btnStyle}
                           onPress={()=>this.props.navigation.navigate('LoansScreen')}>
                               <Icon name="person-add" style={styles.iconStyle} />
                               <Text style={styles.btnText}>{ `New
                                 Patients`} </Text>
                           </Button>

                           <Button vertical style={styles.btnStyle}
                            onPress={()=>this.props.navigation.navigate('LoansScreen')}>
                                <Icon name="ios-mail" style={styles.iconStyle} />
                                <Text style={styles.btnText}>Messages</Text>
                            </Button>
                          </View>
                </View>
              </List>
          </Content>
        </Container>
        );
      }
    }

  const styles = StyleSheet.create({
      btnText:{
        color: '#rgba(2, 96, 148, 0.95)',
        fontSize: 11
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,

      },
      btnStyle:{
        padding: 0,
        backgroundColor:'white',
        margin: 7,
        borderWidth: 2,
        height: 100,
        width: 100,
        flex:1,
        borderColor: 'white',
        borderRadius: 7,
        alignContent: 'space-around'
      },
      iconStyle:{
        color:'#rgba(2, 96, 148, 0.95)',
        fontSize:30
      },
      });

  function  mapStateToProps(state){
    return state
  }

export default connect(mapStateToProps)(HomeScreen);
