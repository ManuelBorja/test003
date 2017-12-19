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

import api from '../util/api';

export default class Gerencias extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      gerencias: []
    }
  }

  componentWillMount(){
    api.getGerencias().then((res) => {
      this.setState({
        gerencias: res.gerencias
      });
    });
  };

  handlePress(tit) {
     console.log(tit);
     Actions.portafolios({padre:tit});
  };
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.tituloBloque}>
          <Text style={styles.textoTituloBloque}>
            INSTITUCIONAL
          </Text>
        </View>

        <View style={styles.tituloSeccion}>
          <Text style={styles.textoTituloSeccion}>
            Gerencias del sector
          </Text>          
          <Text style={styles.textoTituloSeccion}>
            {this.props.padre}
          </Text>
        </View>

        <ScrollView>
          {
            this.state.gerencias.map(res => {
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
