(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarEntidades', controladorListarEntidades);
    
    controladorListarEntidades.$inject = ['servicioEntidades'];

  function controladorListarEntidades(servicioEntidades) {
    let vm = this;

    vm.listaEntidades = servicioEntidades.getEntidades();

  }
})();