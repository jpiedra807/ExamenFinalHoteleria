(()=>{
'use strict';
angular
.module('correos')
.controller('controladorListaPaquetesAdmin', controladorListaPaquetesAdmin);

controladorListaPaquetesAdmin.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

function controladorListaPaquetesAdmin($state, $stateParams, $location, servicioUsuarios) {
  let vm = this;

  vm.listaPaquetes = servicioUsuarios.getPaquete();
 
  vm.reporteEstados = ()=>{
    $state.go("main.listaEstados");
  }
   
}

})();