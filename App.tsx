/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import AppText from './src/components/Common/Text/text';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AppText style={styles.welcome}>Welcome to React Native!</AppText>
        <AppText style={styles.instructions}>
          To get started, edit App.js
        </AppText>
        <AppText style={styles.instructions}>{instructions}</AppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    textAlign: 'center',
    margin: 10
    // fontSize: fontSizeFormat(14),
    // fontWeight: 'normal',
    // fontFamily: fontType.regular
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
