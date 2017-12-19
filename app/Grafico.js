import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

export default class Grafico extends React.Component {
  render() {

    //console.warn(this.props.data);

    return (
      <View style={styles.Container} >
          <Text style={styles.tituloGrafico}>{this.props.titulo}</Text>
          <VictoryChart
            width={320}
            height={115}
            padding={35}
            theme={VictoryTheme.material} >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc"}
              }}
              data={this.props.data}
            />
          </VictoryChart>
          <View style={styles.Dato}>
            <Text style={styles.tituloDato}>{"ACU :"}{this.props.acu}%</Text>
            <Text style={styles.tituloDato}>{"TRI :"}{this.props.tri}%</Text>
          </View>
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
