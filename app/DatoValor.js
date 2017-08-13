import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DatoValor extends React.Component {
  render() {
    if(this.props.valor>=85 && this.props.valor<=115){
      return (
            <View style={[styles.dato,styles.verde]}>
                <Text style={styles.textoDato}>
                  {this.props.valor}%
                </Text>
            </View>
      );
    }else if((this.props.valor>=50 && this.props.valor<85) || (this.props.valor>115 && this.props.valor<=150)){
      return (
            <View style={[styles.dato,styles.amarillo]}>
                <Text style={styles.textoDato}>
                  {this.props.valor}%
                </Text>
            </View>
      );
    }else if((this.props.valor<50 || this.props.valor>150)){
      return (
            <View style={[styles.dato,styles.rojo]}>
                <Text style={styles.textoDato}>
                  {this.props.valor}%
                </Text>
            </View>
      );
    }
    else {
      return (
            <View style={[styles.dato,styles.rojo]}>
                <Text style={styles.textoDato}>
                  S.V.
                </Text>
            </View>
      );
    }
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

  dato:{
    alignItems:'center',
    width:100,
    height:50,
  },

  rojo:{backgroundColor:'red',},
  verde:{backgroundColor:'green',},
  amarillo:{backgroundColor:'orange',},

  textoDato:{
    flexDirection:'column',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },

});
