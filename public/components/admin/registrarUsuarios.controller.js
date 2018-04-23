(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarUsuarios', controladorRegistrarUsuarios);
    
    controladorRegistrarUsuarios.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorRegistrarUsuarios($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaUsuarios = listarUsuarios();
    vm.nuevoUsuario = {};

    vm.regresar = () => {
      $state.go('admin');
    }

    vm.editUsuarios = (pUsuario) =>{
      $state.go('editarUsuarios', {objUsuarioTemp : JSON.stringify(pUsuario)});

    };

    vm.registrarUsuario = (pNuevoUsuario) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, pNuevoUsuario.foto, pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito,pNuevoUsuario.direccionExacta, pNuevoUsuario.tipo,pNuevoUsuario.sucursalAsignada, pNuevoUsuario.puesto);

      let registro = servicioUsuarios.addUsuario(objNuevoUsuario);

      if (registro == true) {
        swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        /*$location.path('/logIn');*/
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }

    }

    function listarUsuarios(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      return listaUsuarios;
    }
  }
})();

// function listarEncargadoSucursal(){
//   let listaUsuarios = servicioUsuarios.getUsuarios();
//   let listaEncargadoSucursal = [];
//   listaUsuarios.forEach(usuario => {
//     if (usuario.tipo == '2') {
//       listaEncargadoSucursal.push(usuario);
//     }
//   });
//   return listaEncargadoSucursal;
// }