/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';


import Login from './app/Login'

export default class tabmov001 extends Component {
  render() {
    return (
      <Login/>
    );
  }
}

AppRegistry.registerComponent('tabmov001', () => tabmov001);
