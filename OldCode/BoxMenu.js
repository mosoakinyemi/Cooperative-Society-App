/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

<Text>I the MyComponent component</Text>

export default class MyComponent extends Component {
  render() {
    return (

      <View style={{flex:1,flexDirection: 'column'}}>
          <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1}}>
              </View>
          </View>

          <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1}}>
              </View>
              <View style={{flex:1}}>
              </View>
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
