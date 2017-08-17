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

export default class Portafolios extends React.Component {

  handlePress() {
     Actions.indicador();
  };

  render() {

    const dataPortafolio = [
    {'id':1,'titulo':'Gerencia de Agricultura','eficacia':'202','eficiencia':'80','ejecucion':'75'},
    {'id':2,'titulo':'Gerencia Regional de Energia y Minas','eficacia':'42','eficiencia':'65','ejecucion':'60'},
    {'id':3,'titulo':'Gerencia Regional de Salud','eficacia':'152','eficiencia':'50','ejecucion':'45'},
    {'id':4,'titulo':'Gerencia Regional de Trabajo y Promoción del Empleo','eficacia':'55','eficiencia':'53','ejecucion':'45'},
    {'id':5,'titulo':'Gerencia Regional de Transportes y comunicaciones','eficacia':'55','eficiencia':'95','ejecucion':'45'},
    {'id':6,'titulo':'Gerencia Regional de Vivienda y Saneamiento','eficacia':'0','eficiencia':'0','ejecucion':'0'},
    ];


    return (
      <View style={styles.container}>

        <View style={styles.tituloBloque}>
          <Text style={styles.textoTituloBloque}>
            INSTITUCIONAL
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={styles.textoTituloSeccion}>
            Portafolios
          </Text>
        </View>

        <ScrollView>
          {
            dataPortafolio.map(res => {
              return (
                <TouchableOpacity key={res.id} onPress={() => this.handlePress()} >
                    <Resultado data={res} />
                </TouchableOpacity>
              )
            })
          
          }
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
