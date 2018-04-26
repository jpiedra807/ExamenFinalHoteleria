(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorEditarRepartidor', controladorEditarRepartidor);

    controladorEditarRepartidor.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

  function controladorEditarRepartidor($stateParams, $state, $location, servicioUsuarios) {
    let vm = this;

    vm.regresar = () => {
      $state.go('main.repartidor');
    }

    vm.editarRepartidor = {};

    let objRepartidorEditable = JSON.parse($stateParams.objRepartidorTemp);

    let objRepartidor = new Usuario(objRepartidorEditable.cedula, objRepartidorEditable.foto, objRepartidorEditable.primerNombre, objRepartidorEditable.segundoNombre, objRepartidorEditable.primerApellido, objRepartidorEditable.segundoApellido, objRepartidorEditable.correo, objRepartidorEditable.telefono, objRepartidorEditable.fechaNacimiento, objRepartidorEditable.provincia, objRepartidorEditable.canton, objRepartidorEditable.distrito, objRepartidorEditable.direccionExacta,objRepartidorEditable.contrasenna, '3',objRepartidorEditable.sucursalAsignada,objRepartidorEditable.vehiculo, objRepartidorEditable.licencias);

    


    vm.editarRepartidor.cedula = objRepartidor.cedula;
    vm.editarRepartidor.foto = objRepartidor.foto;
    vm.editarRepartidor.primerNombre = objRepartidor.primerNombre;
    vm.editarRepartidor.segundoNombre = objRepartidor.segundoNombre;
    vm.editarRepartidor.primerApellido = objRepartidor.primerApellido;
    vm.editarRepartidor.segundoApellido = objRepartidor.segundoApellido;
    vm.editarRepartidor.correo = objRepartidor.correo;
    vm.editarRepartidor.telefono = objRepartidor.telefono;
    vm.editarRepartidor.fechaNacimiento = new Date(objRepartidor.fechaNacimiento);
    vm.editarRepartidor.provincia = objRepartidor.provincia;
    vm.editarRepartidor.canton = objRepartidor.canton;
    vm.editarRepartidor.distrito = objRepartidor.distrito;
    vm.editarRepartidor.direccionExacta = objRepartidor.direccionExacta;
    vm.editarRepartidor.contrasenna = objRepartidor.contrasenna;
    vm.editarRepartidor.tipo = '';
    vm.editarRepartidor.sucursalAsignada = objRepartidor.sucursalAsignada;
    vm.editarRepartidor.vehiculo = objRepartidor.vehiculo;
    vm.editarRepartidor.licencias = objRepartidor.licencias;

    vm.eliminarUsuario = (pEstado) =>{
      let listaUsuarios = servicioUsuarios.getUsuarios();
      listaUsuarios.forEach(objUsuario => {
        if(objUsuario.correo == objNuevoUsuario.correo){
          objUsuario.cambiarEstado(pEstado);
        }
        servicioUsuarios.actualizarUsuario(objUsuario);
      });
      $state.go('main.listarRepartidores');
    }

    vm.editRepartidor = (pUsuario) => {
      let listaUsuarios = servicioUsuarios.getUsuarios();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.cedula == pUsuario.cedula) {
          objUsuario.foto = pUsuario.foto;
          objUsuario.primerNombre = pUsuario.primerNombre;
          objUsuario.segundoNombre = pUsuario.segundoNombre;
          objUsuario.primerApellido = pUsuario.primerApellido;
          objUsuario.segundoApellido = pUsuario.segundoApellido;
          objUsuario.correo = pUsuario.correo;
          objUsuario.telefono = pUsuario.telefono;
          objUsuario.fechaNacimiento = pUsuario.fechaNacimiento;
          objUsuario.provincia = pUsuario.provincia;
          objUsuario.canton = pUsuario.canton;
          objUsuario.distrito = pUsuario.distrito;
          objUsuario.direccionExacta = pUsuario.direccionExacta;
          objUsuario.contrasenna = pUsuario.contrasenna;
          objUsuario.sucursalAsignada = pUsuario.sucursalAsignada;
          objUsuario.vehiculo = pUsuario.vehiculo;
          objUsuario.licencias = pUsuario.licencias;

    

          servicioUsuarios.actualizarUsuario(objUsuario);
        }
      });
      swal("Edición exitosa", "Repartidor editado correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('main.repartidor')
    }
  }

})();