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
    console.log(this.props.actualizar);
    if(this.props.actualiar){
       api.actualizar()     
    }
    
    api.lResumen().then((res) => {
      this.setState({
        resumen: res.resumen
      });
    });
  };

  handlePress() {
     Actions.resultados();
  };

  render() {

    //console.warn(this.state.resumen);

    return (
      <View style={styles.Container} >

        <StatusBar hidden={true} />

        <TouchableOpacity onPress={() => this.handlePress()} >
                <Text style={styles.Titulo}>{"INSTITUCIONAL - RESUMEN"}</Text>
        </TouchableOpacity>

        <ScrollView>
        {
          this.state.resumen.map(res => {
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
