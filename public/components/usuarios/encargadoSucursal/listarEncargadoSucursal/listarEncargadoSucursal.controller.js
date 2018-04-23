(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarEncargadoSucursal', controladorListarEncargadoSucursal);
    
    controladorListarEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios', 'servicioSucursales'];

  function controladorListarEncargadoSucursal($state, $stateParams, $location, servicioUsuarios, servicioSucursales) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();
  

    vm.editUsuarios = (pUsuario) =>{
      $state.go('main.modificarEncargadoSucursal', {objUsuarioTemp : JSON.stringify(pUsuario)});

    };

    function listarUsuarios(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      return listaUsuarios;
    }
  }
})();
