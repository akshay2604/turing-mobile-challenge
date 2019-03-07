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
import { StyleSheet, View, Text } from 'react-native';
// import Home from './src/components/home';
import AppContainer from './src/navigation/AppNavigation';
import { metrics } from '@themes';
// import { Home, DetailsScreen } from 'src/components/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#F5FCFF'
//   }
// });
