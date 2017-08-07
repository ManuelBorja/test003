import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import Grafico from './Grafico';
import {Actions} from 'react-native-router-flux';

export default class Resumen extends React.Component {

  handlePress() {
     Actions.resultados();
  };

  render() {
    return (
      <View style={styles.Container} >

        <StatusBar barstyle="light-content" />

        <TouchableOpacity onPress={() => this.handlePress()} >
                <Text style={styles.Titulo}>{"INSTITUCIONAL - RESUMEN"}</Text>
        </TouchableOpacity>
        <Grafico titulo="EFICACIA"
                 acu="84%"
                 tri="76%"
                 data={[
                   { x: '1', y: 74 },
                   { x: '2', y: 80 },
                   { x: '3', y: 70 },
                   { x: '4', y: 76 }
                 ]}
        />

        <Grafico titulo="EFICIENCIA"
                 acu="96%"
                 tri="82%"
                 data={[
                   { x: '1', y: 105 },
                   { x: '2', y: 100 },
                   { x: '3', y: 86 },
                   { x: '4', y: 82 }
                 ]}
        />

        <Grafico titulo="EJECUCIÓN PRESUPUESTAL"
                 acu="88%"
                 tri="92%"
                 data={[
                   { x: '1', y: 70 },
                   { x: '2', y: 80 },
                   { x: '3', y: 85 },
                   { x: '4', y: 92 }
                 ]}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container : {
    flex: 1
  },
  Titulo:{
    marginBottom:15,
    paddingTop:25,
    paddingBottom:10,
    backgroundColor:'#008ae6',
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold'
  },
  Dato:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom:10,
  },
  tituloDato:{
    backgroundColor:'#ccf5ff',
    padding:5
  },
  Grafico:{
    backgroundColor:'#b3b300',
  },
  tituloGrafico:{
    paddingLeft:20,
    backgroundColor:'#ccf5ff',
  }
});
