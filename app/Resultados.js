import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Resultado from './Resultado';
import {Actions} from 'react-native-router-flux';

import api from '../util/api';

export default class Resultados extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      resultado: []
    }
  }

  componentWillMount(){
    api.getResultado().then((res) => {
      this.setState({
        resumen: res.resultado,
        nombre: res.resultado[0].titulo
      });
    });
  };

  handlePress(tit) {
     console.log(tit);
     Actions.gerencias({padre:tit});
  };

  render() {
    const dataResultado = [
    {'id':1,'titulo':'Social','eficacia':'92','eficiencia':'95','ejecucion':'90'},
    {'id':2,'titulo':'Ambiental','eficacia':'202','eficiencia':'80','ejecucion':'75'},
    {'id':3,'titulo':'Proyectos Especiales','eficacia':'42','eficiencia':'65','ejecucion':'60'},
    {'id':4,'titulo':'Infraestructura y Transporte','eficacia':'152','eficiencia':'50','ejecucion':'45'},
    {'id':5,'titulo':'Sub Regiones','eficacia':'55','eficiencia':'95','ejecucion':'45'},
    {'id':6,'titulo':'Económica y Transporte','eficacia':'49','eficiencia':'50','ejecucion':'45'},
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
            Resultados
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={{backgroundColor:'grey'}} > Trimestre </Text>
          <Text style={{backgroundColor:'black'}} > Acumulado </Text>
        </View>

       console.warn(this.state.nombre);        

        <ScrollView>
          {
            dataResultado.map(res => {
              return (
                <TouchableOpacity key={res.id} onPress={() => this.handlePress(res.titulo)} >
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
