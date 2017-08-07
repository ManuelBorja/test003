import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Router, Scene} from 'react-native-router-flux';

import Login from './app/Login';
import Resumen from './app/Resumen';
import Resultados from './app/Resultados';


export default class App extends React.Component {
  render() {
    return (

      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar
            initial
          />
          <Scene
            key="resumen"
            component={Resumen}
            title="Resumen"
          />
          <Scene
            key="resultados"
            component={Resultados}
            title="Resultados"
          />
        </Scene>
      </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
