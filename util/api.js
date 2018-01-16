var api = {

  actualizar(){
    this.getResumen().then((res) => {
      AsyncStorage.setItem(
        resumen: JSON.stringify(res.resumen)
      );
    });
  },

  lResumen = async () => {
     try{
        return await AsyncStorage.getItem('resumen')
                                 .then( (resumen) => JSON.parse(resumen) )
                                 .catch( (error) => return error );
     }catch(error){
        alert(error);
     }
  },

  getResumen(){
    var url='http://api.progobernabilidad.org.pe/resumen';
    return fetch(url)
           .then((res) => res.json())
           .catch((error) => {
            return error;
          });
  },
  getResultado(){
    var url='http://api.progobernabilidad.org.pe/resultado';
    return fetch(url)
           .then((res) => res.json())
           .catch((error) => {
            return error;
          });
  },

  getGerencias(){
    var url='http://api.progobernabilidad.org.pe/gerencias';
    return fetch(url)
           .then((res) => res.json())
           .catch((error) => {
            return error;
          });
  },

  getPortafolios(){
    var url='http://api.progobernabilidad.org.pe/Tablero/portafolios';
    return fetch(url)
           .then((res) => res.json())
           .catch((error) => {
            return error;
          });
  },  

  getIndicadores(){
    var url='http://api.progobernabilidad.org.pe/Tablero/indicadores';
    return fetch(url)
           .then((res) => res.json())
           .catch((error) => {
            return error;
          });
  },  

};

module.exports = api;
