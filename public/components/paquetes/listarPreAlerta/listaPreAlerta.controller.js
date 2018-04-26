(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorListaPreAlerta', controladorListaPreAlerta);
  controladorListaPreAlerta.$inject = ['$state','$stateParams','$location','servicioUsuarios'];

  function controladorListaPreAlerta($state,$stateParams,$location,servicioUsuarios) {
    let vm = this;
   
   vm.listaPaquetes = servicioUsuarios.getPaquete();

    

    vm.editPrealerta = (pPaquete)=>{
     $state.go('main.editarPreAlerta', {objPaqueteTemp : JSON.stringify(pPaquete)});
     };



  }
   
})();