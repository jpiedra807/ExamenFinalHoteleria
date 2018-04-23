(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarEncargadoAduana', controladorListarEncargadoAduana);
    
    controladorListarEncargadoAduana.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorListarEncargadoAduana($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();
  

    vm.editUsuarios = (pUsuario) =>{
      $state.go('main.modificarEncargadoAduana', {objUsuarioTemp : JSON.stringify(pUsuario)});

    };

    function listarUsuarios(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      return listaUsuarios;
    }
  }
})();
