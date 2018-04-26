(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorModificarCliente', controladorModificarCliente);

  controladorModificarCliente.$inject = ['$http', '$stateParams', '$state', '$location', 'servicioUsuarios'];

  function controladorModificarCliente($http, $stateParams, $state, $location, servicioUsuarios) {
    let vm = this;
    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success) => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success) => {
        let cantones = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidProvincia == success.data[i].idProvincia) {
            cantones.push(success.data[i]);
          }
        }
        vm.cantones = cantones;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.rellenarDistrito = (pidCanton) => {
      console.log(pidCanton);
      vm.distritos = $http({
        method: 'GET',
        url: './sources/data/distritos.json'
      }).then((success) => {
        let distritos = [];
        for (let i = 0; i < success.data.length; i++) {
          if (pidCanton == success.data[i].idCanton) {
            distritos.push(success.data[i]);
          }
        }
        vm.distritos = distritos;
      }, (error) => {
        console.log("Ocurrió un error " + error.data)
      });
    }

    vm.modificarCliente = {};

    vm.objNuevoCliente = {};

    if(servicioUsuarios.getRol() == '1') {
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      let listaUsuarios = servicioUsuarios.getUsuarios();
      for (let i = 0; i < listaUsuarios.length; i++) {
        if(listaUsuarios[i].correo == sesion.correo){
          vm.objNuevoCliente = new Usuario(listaUsuarios[i].cedula, listaUsuarios[i].foto, listaUsuarios[i].primerNombre, listaUsuarios[i].segundoNombre, listaUsuarios[i].primerApellido, listaUsuarios[i].segundoApellido, listaUsuarios[i].correo, listaUsuarios[i].telefono, listaUsuarios[i].fechaNacimiento, listaUsuarios[i].provincia, listaUsuarios[i].canton, listaUsuarios[i].distrito, listaUsuarios[i].direccionExacta, listaUsuarios[i].contrasenna, '1'); 
        }

      }
    }
    else {
      let objClienteAModificar = JSON.parse($stateParams.objClienteTemp);
      vm.objNuevoCliente = new Usuario(objClienteAModificar.cedula, objClienteAModificar.foto, objClienteAModificar.primerNombre, objClienteAModificar.segundoNombre, objClienteAModificar.primerApellido, objClienteAModificar.segundoApellido, objClienteAModificar.correo, objClienteAModificar.telefono, objClienteAModificar.fechaNacimiento, objClienteAModificar.provincia, objClienteAModificar.canton, objClienteAModificar.distrito, objClienteAModificar.direccionExacta, objClienteAModificar.contrasenna, '1');
    }

      vm.modificarCliente.cedula = vm.objNuevoCliente.cedula;
      vm.modificarCliente.foto = vm.objNuevoCliente.foto;
      vm.modificarCliente.primerNombre = vm.objNuevoCliente.primerNombre;
      vm.modificarCliente.segundoNombre = vm.objNuevoCliente.segundoNombre;
      vm.modificarCliente.primerApellido = vm.objNuevoCliente.primerApellido;
      vm.modificarCliente.segundoApellido = vm.objNuevoCliente.segundoApellido;
      vm.modificarCliente.correo = vm.objNuevoCliente.correo;
      vm.modificarCliente.telefono = vm.objNuevoCliente.telefono;
      vm.modificarCliente.fechaNacimiento = new Date(vm.objNuevoCliente.fechaNacimiento);
      vm.modificarCliente.provincia = vm.objNuevoCliente.provincia;
      vm.modificarCliente.canton = vm.objNuevoCliente.canton;
      vm.modificarCliente.distrito = vm.objNuevoCliente.distrito;
      vm.modificarCliente.direccionExacta = vm.objNuevoCliente.direccionExacta;
    

    

    vm.modifCliente = (pUsuario) => {
      let listaUsuarios = servicioUsuarios.getUsuarios();

      listaUsuarios.forEach(objUsuario => {
        if (objUsuario.correo == vm.objNuevoCliente.correo) {
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
    

          servicioUsuarios.actualizarUsuario(objUsuario);

        }
      });
      swal("Edición exitosa", "Cliente modificado correctamente", "success", {
        button: "Aceptar",
      });
      let sesion = JSON.parse(sessionStorage.getItem('sesion'));
      if(sesion.tipo == '5'){
        $state.go('main.listarCliente');
      }
      else{
        $state.go('main.dashboard');
      }
      
    }
  }

})();