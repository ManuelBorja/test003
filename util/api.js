var api = {
  getResumen(){
    var url='http://api.progobernabilidad.org.pe/resumen';
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
