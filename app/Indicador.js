import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

import { Table, TableWraper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {Actions} from 'react-native-router-flux';

import Resultado from './Resultado';

export default class Indicador extends React.Component {
  render() {

    const tableHead = ['', 'T1', 'T2', 'T3', 'T4' ];
    const tableTitle = ['Meta programada', 'Meta ejecutada', 'Presupuesto programado (Nuevos soles)', 'Presupuesto ejecutado (Nuevo soles)', 'Ejecución %'];
    const tableData = [
      ['8', '0', '0', '0'],
      ['8', '0', '0', '0'],
      ['22400', '0', '0','0'],
      ['22400', '0', '0','0'],
      ['25', '25', '25','25'],
    ];

    const dataIndicador = [
    {'id':1,'titulo':'','indicador':'Km. Camino de Canal mantenido','unidad':'KM','eficacia':'202','eficiencia':'80','ejecucion':'75'}, ];

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
                    <View key={res.id}>
                      <View style={styles.tituloSeccion}>
                        <Text style={styles.textoTituloSeccion}>
                          Indicador
                        </Text>
                        <Text style={styles.textoTituloSeccion}>
                          {res.indicador}
                        </Text>
                      </View>
                      <View style={styles.tituloSeccion}>
                        <Text style={styles.textoTituloSeccion}>
                          Unidad
                        </Text>
                        <Text style={styles.textoTituloSeccion}>
                          {res.unidad}
                        </Text>
                      </View>
                      <Resultado data={res} />
                    </View>
              )
            })

          }
        </ScrollView>

        <Table>
          <Row data={tableHead} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
          <TableWraper style={{flexDirection: 'row'}}>
            <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={tableData} flexArr={[2, 1, 1]} style={styles.row}/>
          </TableWraper>
        </Table>        

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

  head: { height: 40, backgroundColor: '#f1f8ff' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: { height: 30 },
  text: { textAlign: 'center' },

});
