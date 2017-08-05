import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Dato from './Dato'

export default class Resultado extends Component {
  render() {
    return (
    
        <View style={styles.resultado}>
          <View style={styles.tituloResultado}>
            <Text style={styles.textoTituloResultado}>
              {this.props.titulo}
            </Text>          
          </View>
          <View style={styles.datosResultado}>
              <Dato nombre="Eficacia" valor="100%"/>          
              <Dato nombre="Eficiencia" valor="100%"/>
              <Dato nombre="Ejecución" valor="100%"/>
          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  resultado: {
    alignItems: 'center',
    margin:5,
  },
  tituloResultado: {
    alignItems: 'center',
    margin:5,
  },
  textoTituloResultado: {
    justifyContent:'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  datosResultado: {
    flexDirection:'row',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

