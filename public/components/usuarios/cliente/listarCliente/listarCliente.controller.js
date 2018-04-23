(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarCliente', controladorListarCliente);

  controladorListarCliente.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'/*, 'imageService'*/];

  function controladorListarCliente($state, $stateParams, $location, servicioUsuarios/*, imageService*/) {
    let vm = this;

    vm.listaClientes = listarClientes();
    
    vm.cambiarEstado =(pEstado, pUsuario)=>{
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let usuario = {};
      for (let i = 0; i < listaUsuarios.length; i++) {
        if(listaUsuarios[i].correo == pUsuario.correo){
          listaUsuarios[i].cambiarEstado(pEstado);
          usuario = listaUsuarios[i];
        }
      }
      servicioUsuarios.actualizarUsuario(usuario);
      vm.listaClientes = listarClientes();
    }

    vm.modificar = (pUsuario) =>{
      $state.go('main.modificarCliente', { objClienteTemp: JSON.stringify(pUsuario) });
    };

    function listarClientes() {
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaClientes = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '1') {
          listaClientes.push(usuario);
        }
      });
      return listaClientes;
    }
  }
})();