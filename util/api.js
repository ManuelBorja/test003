var api = {
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

};

module.exports = api;
