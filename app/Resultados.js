import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Resultado from './Resultado';

import {Actions} from 'react-native-router-flux';

export default class Resultados extends React.Component {

  handlePress() {
     Actions.gerencias();
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.tituloBloque}>
          <Text style={styles.textoTituloBloque}>
            INSTITUCIONAL
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={styles.textoTituloSeccion}>
            Resultados
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={{backgroundColor:'grey'}} > Trimestre </Text>
          <Text style={{backgroundColor:'black'}} > Acumulado </Text>
        </View>

        <ScrollView>
        <TouchableOpacity onPress={() => this.handlePress()} >
            <Resultado titulo="Social" eficacia="92" eficiencia="95" ejecucion="90" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress()} >
          <Resultado titulo="Ambiental" eficacia="202" eficiencia="80" ejecucion="75" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress()} >
          <Resultado titulo="Proyectos Especiales" eficacia="42" eficiencia="65" ejecucion="60" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress()} >
          <Resultado titulo="Infraestructura y Transporte" eficacia="152" eficiencia="50" ejecucion="45" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress()} >
          <Resultado titulo="Sub Regiones" eficacia="55" eficiencia="53" ejecucion="45" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handlePress()} >
          <Resultado titulo="Económica y Transporte" eficacia="49" eficiencia="50" ejecucion="45" />
        </TouchableOpacity>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:5,
  },
  tituloBloque: {
    width:400,
    backgroundColor:'blue',
    padding:10,
    marginTop:5,
  },
  textoTituloBloque: {
    color:'white',
    fontSize: 15,
    paddingLeft:15,
  },
  tituloSeccion: {
    width:400,
    flexDirection:'row',
    justifyContent: 'center',
    padding:1,
    margin:1,
  },
  boton:{
    padding:5,
    margin:5,
  },
  textoTituloSeccion: {
    fontWeight: 'bold',
    fontSize: 20,
  },

});
