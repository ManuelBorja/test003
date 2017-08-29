import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import Grafico from './Grafico';
import {Actions} from 'react-native-router-flux';

import api from '../util/api';

export default class Resumen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      resumen: []
    }
  }

  componentWillMount(){
    api.getResumen().then((res) => {
      this.setState({
        resumen: res.resumen
      });
    });
  };

  handlePress() {
     Actions.resultados();
  };

  render() {

    const dataResumen=[
      {id:1,'nombre':'EFICACIA','acu':74,'tri':76,'data':[{ x: '1', y: 74 },{ x: '2', y: 80 },{ x: '3', y: 70 },{ x: '4', y: 76 }]},
      {id:2,'nombre':'EFICIENCIA','acu':96,'tri':82,'data':[{ x: '1', y: 105 },{ x: '2', y: 100 },{ x: '3', y: 86 },{ x: '4', y: 82 }]},
      {id:3,'nombre':'EJECUCIÓN PRESUPUESTAL','acu':88,'tri':92,'data':[{ x: '1', y: 70 },{ x: '2', y: 80 },{ x: '3', y: 85 },{ x: '4', y: 92 }]},
    ];

    console.warn(dataResumen);


    return (
      <View style={styles.Container} >

        <StatusBar barstyle="light-content" />

        <TouchableOpacity onPress={() => this.handlePress()} >
                <Text style={styles.Titulo}>{"INSTITUCIONAL - RESUMEN"}</Text>
        </TouchableOpacity>

        <ScrollView>
        {
          dataResumen.map(res => {
            return (

              <Grafico key={res.id}
                       titulo={res.nombre}
                       acu={res.acu}
                       tri={res.tri}
                       data={res.data}
              />

            )
          })

        }
        </ScrollView>

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
    paddingTop:10,
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
