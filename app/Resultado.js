import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Dato from './Dato'

export default class Resultado extends React.Component {

  render() {

    const {titulo,eficacia,eficiencia,ejecucion} = this.props.data;

    return (

        <View style={styles.resultado}>
          <View style={styles.tituloResultado}>
            <Text style={styles.textoTituloResultado}>
              {titulo}
            </Text>
          </View>
          <View style={styles.datosResultado}>
              <Dato nombre="Eficacia" valor={eficacia}/>
              <Dato nombre="Eficiencia" valor={eficiencia}/>
              <Dato nombre="Ejecución" valor={ejecucion}/>
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
