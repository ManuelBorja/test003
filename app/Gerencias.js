import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Resultado from './Resultado';

export default class Gerencias extends React.Component {
  handlePress() {
     Actions.portafolios();
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
            Gerencias
          </Text>
        </View>

        <ScrollView>
          <TouchableOpacity onPress={() => this.handlePress()} >
              <Resultado titulo="Gerencia de Agricultura" eficacia="-" eficiencia="0" ejecucion="0" />
          </TouchableOpacity>

          <Resultado titulo="Gerencia Regional de Energía y Minas" eficacia="202" eficiencia="80" ejecucion="75" />
          <Resultado titulo="Gerencia Regional de Salud" eficacia="42" eficiencia="65" ejecucion="60" />
          <Resultado titulo="Gerencia Regional de Trabajo y Promoción del Empleo" eficacia="152" eficiencia="50" ejecucion="45" />
          <Resultado titulo="Gerencia Regional de Transportes y comunicaciones" eficacia="55" eficiencia="53" ejecucion="45" />
          <Resultado titulo="Gerencia Regional de Vivienda y Saneamiento" eficacia="49" eficiencia="50" ejecucion="45" />
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
