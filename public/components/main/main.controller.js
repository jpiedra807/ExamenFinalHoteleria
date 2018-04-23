(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorMain', controladorMain);

    controladorMain.$inject = ['$state','$location', 'servicioLogin', 'servicioUsuarios'];

  function controladorMain($state, $location, servicioLogin, servicioUsuarios) {
    const vm = this;

    vm.rol = servicioUsuarios.getRol();
    vm.listaPaquetes = servicioUsuarios.getPaquete();

    vm.cerrarSesion = ()=>{
      servicioLogin.cerrarSesion();

    }    
    vm.usuarioActivo = servicioUsuarios.getUsuarioActivo();
    
  }
})();