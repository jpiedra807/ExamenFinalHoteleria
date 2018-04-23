(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorModificarEncargadoSucursal', controladorModificarEncargadoSucursal);

    controladorModificarEncargadoSucursal.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios', 'servicioSucursales'];

  function controladorModificarEncargadoSucursal($stateParams, $state, $location, servicioUsuarios, servicioSucursales) {
    let vm = this;

    vm.listaSucursales = servicioSucursales.getSucursal();

    vm.regresar = () => {
      $state.go('main.listarEncargadoSucursal');
    }

    vm.editarUsuarios = {};

    let objUsuarioAEditar = JSON.parse($stateParams.objUsuarioTemp);

    let objNuevoUsuario = new Usuario(objUsuarioAEditar.cedula, objUsuarioAEditar.foto, objUsuarioAEditar.primerNombre, objUsuarioAEditar.segundoNombre, objUsuarioAEditar.primerApellido, objUsuarioAEditar.segundoApellido, objUsuarioAEditar.correo, objUsuarioAEditar.telefono, objUsuarioAEditar.fechaNacimiento, objUsuarioAEditar.provincia, objUsuarioAEditar.canton, objUsuarioAEditar.distrito, objUsuarioAEditar.direccionExacta, objUsuarioAEditar.contrasenna, objUsuarioAEditar.tipo, objUsuarioAEditar.sucursalAsignada);


    vm.editarUsuarios.cedula = objNuevoUsuario.cedula;
    vm.editarUsuarios.foto = objNuevoUsuario.foto;
    vm.editarUsuarios.primerNombre = objNuevoUsuario.primerNombre;
    vm.editarUsuarios.segundoNombre = objNuevoUsuario.segundoNombre;
    vm.editarUsuarios.primerApellido = objNuevoUsuario.primerApellido;
    vm.editarUsuarios.segundoApellido = objNuevoUsuario.segundoApellido;
    vm.editarUsuarios.correo = objNuevoUsuario.correo;
    vm.editarUsuarios.telefono = objNuevoUsuario.telefono;
    vm.editarUsuarios.fechaNacimiento = new Date(objNuevoUsuario.fechaNacimiento);
    vm.editarUsuarios.provincia = objNuevoUsuario.provincia;
    vm.editarUsuarios.canton = objNuevoUsuario.canton;
    vm.editarUsuarios.distrito = objNuevoUsuario.distrito;
    vm.editarUsuarios.direccionExacta = objNuevoUsuario.direccionExacta;
    vm.editarUsuarios.contrasenna = objNuevoUsuario.contrasenna;
    vm.editarUsuarios.tipo = objNuevoUsuario.tipo;
    vm.editarUsuarios.sucursalAsignada = objNuevoUsuario.sucursalAsignada;
    


    vm.eliminarUsuario = (pEstado) =>{
      let listaUsuarios = servicioUsuarios.getUsuarios();
      listaUsuarios.forEach(objUsuario => {
        if(objUsuario.correo == objNuevoUsuario.correo){
          objUsuario.cambiarEstado(pEstado);
        }
        servicioUsuarios.actualizarUsuario(objUsuario);
      });
      $state.go('mainlistarEncargadoSucursal');
    }
    

    vm.editUsuarios = (pUsuario) => {
      let listaUsuarios = servicioUsuarios.getUsuarios();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.correo == objNuevoUsuario.correo) {
          objUsuario.cedula = pUsuario.cedula;
          objUsuario.foto = pUsuario.foto;
          objUsuario.primerNombre = pUsuario.primerNombre;
          objUsuario.segundoNombre = pUsuario.segundoNombre;
          objUsuario.primerApellido = pUsuario.primerApellido;
          objUsuario.segundoApellido = pUsuario.segundoApellido;
          objUsuario.telefono = pUsuario.telefono;
          objUsuario.fechaNacimiento = pUsuario.fechaNacimiento;
          objUsuario.provincia = pUsuario.provincia;
          objUsuario.canton = pUsuario.canton;
          objUsuario.distrito = pUsuario.distrito;
          objUsuario.direccionExacta = pUsuario.direccionExacta;
          objUsuario.contrasenna = pUsuario.contrasenna;
          objUsuario.tipo = pUsuario.tipo;
          objUsuario.sucursalAsignada = pUsuario.sucursalAsignada;

          servicioUsuarios.actualizarUsuario(objUsuario);

        }
      });
      swal("Edición exitosa", "Usuario editado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('main.listarEncargadoSucursal');
    }
  }

})();