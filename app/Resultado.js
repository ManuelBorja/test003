import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dato from './Dato'

export default class Resultado extends React.Component {

  render() {
    return (

        <View style={styles.resultado}>
          <View style={styles.tituloResultado}>
            <Text style={styles.textoTituloResultado}>
              {this.props.titulo}
            </Text>
          </View>
          <View style={styles.datosResultado}>
              <Dato nombre="Eficacia" valor={this.props.eficacia}/>
              <Dato nombre="Eficiencia" valor={this.props.eficiencia}/>
              <Dato nombre="Ejecución" valor={this.props.ejecucion}/>
          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  resultado: {
    alignItems: 'center',
    margin:5,
  },
  tituloResultado: {
    alignItems: 'center',
    margin:5,
  },
  textoTituloResultado: {
    justifyContent:'center',
  },
  datosResultado: {
    flexDirection:'row',
  },
});
