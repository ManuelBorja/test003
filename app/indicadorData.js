import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';

export default class Indicador extends React.Component {
  render() {

   const detalle = [
      {'id':'1','titulo':'Meta Programada','t1':'200','t2':'25','t3':'25','t4':'25'},
      {'id':'2','titulo':'Meta ejecutada','t1':'25','t2':'200','t3':'25','t4':'25'},
      {'id':'3','titulo':'Presupuesto programado (Nuevos soles)','t1':'25','t2':'25','t3':'200','t4':'25'},
      {'id':'4','titulo':'Presupuesto ejecutado (Nuevo soles)','t1':'25','t2':'25','t3':'25','t4':'200'},
      {'id':'5','titulo':'Ejecución %','t1':'150','t2':'25','t3':'25','t4':'25'},
    ]

    return (
      <View>

          <View style={styles.tablaTitulo}>
              <View style={styles.datoTitulo}><Text style={{color:'white',fontWeight: 'bold'}}></Text></View>
              <View style={styles.dato}><Text style={{color:'white',fontWeight: 'bold'}}>T1</Text></View>
              <View style={styles.dato}><Text style={{color:'white',fontWeight: 'bold'}}>T2</Text></View>
              <View style={styles.dato}><Text style={{color:'white',fontWeight: 'bold'}}>T3</Text></View>
              <View style={styles.dato}><Text style={{color:'white',fontWeight: 'bold'}}>T4</Text></View>
          </View>

          {
              detalle.map( d => {
                return(
                  <View key={d.id} style={styles.datosResultado}>
                      <View style={styles.datoTitulo}><Text style={{fontWeight: 'bold'}}>{d.titulo}</Text></View>
                      <View style={styles.dato}><Text>{d.t1}</Text></View>
                      <View style={styles.dato}><Text>{d.t2}</Text></View>
                      <View style={styles.dato}><Text>{d.t3}</Text></View>
                      <View style={styles.dato}><Text>{d.t4}</Text></View>
                  </View>
                )
              })
          }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  tablaTitulo:{
    flexDirection:'row',
    alignItems: 'center',
    margin:4,
    backgroundColor:'#809fff',
    alignItems: 'center',
  },
  datosResultado: {
    flexDirection:'row',
    alignItems: 'center',
    margin:4,
  },
  datoTitulo:{
    width:120,
  },
  dato:{
    alignItems: 'center',
    margin:2,
    width:45,
    height:25,
  }
})
