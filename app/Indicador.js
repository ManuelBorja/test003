import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import {Actions} from 'react-native-router-flux';
import IndicadorData from './indicadorData';
import Resultado from './Resultado';
import Grafico from './Grafico';

import api from '../util/api';

export default class Indicador extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      indicador: []
    }
  }

  componentWillMount(){
    api.getIndicadores().then((res) => {
      this.setState({
        indicador: res.indicadores[3]
      });
    });
  };

  render() {

    const dataIndicador = [
    {'id':1,'titulo':'','indicador':'Km. Camino de Canal mantenido','unidad':'KM','eficacia':'202','eficiencia':'80','ejecucion':'75'}, ];

    const res = this.state.indicador;

    //console.warn(this.state.indicador);  

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

              <View key={res.id}>
                <View style={styles.Indicador}>
                  <View style={styles.tituloIndicador}>
                    <Text style={styles.textoTituloIndicador}>
                      Indicador
                    </Text>
                  </View>
                  <View style={styles.datoIndicador}>
                    <Text style={styles.textoDatoIndicador}>
                      {res.indicador}
                    </Text>
                  </View>
                </View>
                <View style={styles.Indicador}>
                  <View style={styles.tituloIndicador}>
                    <Text style={styles.textoTituloIndicador}>
                      Unidad
                    </Text>
                  </View>
                  <View style={styles.datoIndicador}>
                    <Text style={styles.textoDatoIndicador}>
                      {res.unidad}
                    </Text>
                  </View>
                </View>

                <Resultado data={res} />

                <IndicadorData data={res} />

              </View>

          }

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
  Indicador: {
    flexDirection:'row',
    backgroundColor:'#809fff',
  },
  tituloIndicador: {
    width:80,
    margin:5,
  },
  datoIndicador: {
    margin:5,
  },
  textoTituloIndicador: {
    fontWeight: 'bold',
    fontSize: 15,
    color:'white',
  },

});
