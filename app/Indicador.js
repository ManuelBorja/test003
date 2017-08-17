import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Resultado from './Resultado';

export default class Indicador extends React.Component {
  render() {

    const dataIndicador = [
    {'id':1,'titulo':'Km. Camino de Canal mantenido','unidad':'KM','eficacia':'202','eficiencia':'80','ejecucion':'75'}, ];

    return (
      <View style={styles.container}>

        <View style={styles.tituloBloque}>
          <Text style={styles.textoTituloBloque}>
            INSTITUCIONAL
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={styles.textoTituloSeccion}>
            Portafolio de {this.props.padre}
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={styles.textoTituloSeccion}>
            Detalle del Indicador
          </Text>
        </View>

        <ScrollView>
          {
            dataIndicador.map(res => {
              return (
                    <View>
                      <Resultado key={res.id} data={res} />
                      <View style={styles.tituloSeccion}>
                        <Text style={styles.textoTituloSeccion}>
                          Unidad {res.unidad}
                        </Text>
                      </View>
                    </View>
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