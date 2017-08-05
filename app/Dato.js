import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Dato extends Component {
  render() {
    return (

        <View style={styles.detalleResultado}>
            <View style={styles.cabecera} >
              <Text style={styles.titulo}>
                {this.props.nombre}
              </Text>
            </View>

            <View style={styles.dato}>
                <Text style={styles.red}>
                  {this.props.valor}
                </Text>
            </View>
        </View>            

    );
  }
}

const styles = StyleSheet.create({
  detalleResultado: {  
    alignItems: 'center',
    backgroundColor:'orange',
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
    backgroundColor:'red',
    height:50,
  },

  red:{
    flexDirection:'column',
    color: 'white',
    fontWeight: 'bold',    
    fontSize: 25,
  },

  green:{
    backgroundColor:'green',
  },

  orange:{
    backgroundColor:'orange',
  },


});