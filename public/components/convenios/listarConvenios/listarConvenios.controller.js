(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorListarConvenios', controladorListarConvenios);
  controladorListarConvenios.$inject = ['servicioEntidades']
  function controladorListarConvenios(servicioEntidades) {
    let vm = this;

    vm.listaConvenios = servicioEntidades.getConvenios();

  }
})();