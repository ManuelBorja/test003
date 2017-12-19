import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Login from './app/Login';
import Resumen from './app/Resumen';
import Resultados from './app/Resultados';
import Gerencias from './app/Gerencias';
import Portafolios from './app/Portafolios';
import Indicador from './app/Indicador';

/*
TODO :
1. Vista de detalle
2. Actualizar fuera de linea.
  2.1 Botón actualizar
  2.2 Ejecutar api remoto y almacenarlo en contenedores en memoria
  2.3 Grabar contenedores de memoria en dispositivo
  2.4 Recuperar datos grabados en dispositios

3. Realizar los filtros localmente
4. Validación login

*/

export default class App extends React.Component {
  render() {
    return (

      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            title="Login"
            hideNavBar
            initial
          />
          <Scene
            key="resumen"
            component={Resumen}
            title="Resumen"
          />
          <Scene
            key="resultados"
            component={Resultados}
            title="Resultados"
          />
          <Scene
            key="gerencias"
            component={Gerencias}
            title="Gerencias"
          />
          <Scene
            key="portafolios"
            component={Portafolios}
            title="Portafolios"
          />
          <Scene
            key="indicador"
            component={Indicador}
            title="Indicador"
          />
        </Scene>
      </Router>

    );
  }
}
