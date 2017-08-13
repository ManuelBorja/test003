import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import DatoValor from './DatoValor';

export default class Dato extends React.Component {
  render() {
    return (
        <View style={styles.detalleResultado}>
            <View style={styles.cabecera} >
              <Text style={styles.titulo}>
                {this.props.nombre}
              </Text>
            </View>
            <DatoValor valor={this.props.valor}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  detalleResultado: {
    alignItems: 'center',
    margin:2,
    width:100,
    height:75,
  },

  cabecera: {
    alignItems: 'center',
    backgroundColor:'white',
    height:25,
    width:100,
  },

  titulo:{
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
