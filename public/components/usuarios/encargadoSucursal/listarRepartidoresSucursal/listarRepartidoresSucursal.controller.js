(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarRepartidoresSucursal', controladorListarRepartidoresSucursal);
    
    controladorListarRepartidoresSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorListarRepartidoresSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaRepartidores = listarRepartidores();
  
    vm.rolSucursal = servicioUsuarios.getRolSucursal();    

    vm.editRepartidor = (pUsuario) =>{
      $state.go('main.editarRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});
    };


    function listarRepartidores(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaRepartidores = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '3') {
          listaRepartidores.push(usuario);
        }
      });
      return listaRepartidores;
    } 
    
  }
})();