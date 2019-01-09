import React from 'react';
import {StatusBar,StyleSheet, View, TextInput, TouchableOpacity,FlatList,Image} from 'react-native';
import { Container, Content,Button,Title, Text,Icon,ListItem,List,Left,Header,Right,Body,Card,CardItem} from "native-base";
import Expo from "expo";
import {connect} from 'react-redux'

 class TransfersScreen extends React.Component {

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
      title: ' TransfersScreen ',
      headerStyle: {
          backgroundColor: 'rgba(83, 226, 6, 0.92)',
          },
      headerTintColor: '#fff',
    };
  };

  constructor(props) {
          super(props);
          this.state = {
                        loading: true,
                        text:'' };
          }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
        }
    return (
        <Container sytle={styles.container}>
          <View style={{flex:1, flexDirection: 'row',height: 60}}>
              <View style={{flex:1 ,backgroundColor: 'rgba(149, 14, 107, 0.86)'}}>
                  <Text>Jan</Text>
              </View>

              <View style={{flex:1, backgroundColor:'#e71785'}}>
                  <Text>Amount</Text>
              </View>
          </View>
        </Container>
        );
      }
    }

    function  mapStateToProps(state){
      return state
    }

    export default connect(mapStateToProps)(TransfersScreen);

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
      },
    })
