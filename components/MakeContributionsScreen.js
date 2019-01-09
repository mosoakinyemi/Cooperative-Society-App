import React from 'react';
import {StatusBar,StyleSheet, View, TextInput, TouchableOpacity,FlatList,Image} from 'react-native';
import { Container, Content,Button,Title, Text,Icon,ListItem,List,Left,Header,Right,Body,Card,CardItem} from "native-base";
import Expo from "expo";
import {connect} from 'react-redux'

 class MakeContributionsScreen extends React.Component {

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
      title: ' MakeContributionsScreen ',
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
        <Container>
        <Text> MakeContributionsScreen Screen working</Text>
        </Container>
        );
      }
    }

    function  mapStateToProps(state){
      return state
    }

    export default connect(mapStateToProps)(MakeContributionsScreen);

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
      },
    })
