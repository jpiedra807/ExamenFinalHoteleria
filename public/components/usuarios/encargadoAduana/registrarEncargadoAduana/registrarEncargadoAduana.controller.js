(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarEncargadoAduana', controladorRegistrarEncargadoAduana);
    
  controladorRegistrarEncargadoAduana.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios', 'imageService','Upload', 'servicioSucursales'];

  function controladorRegistrarEncargadoAduana($http ,$state, $stateParams, $location, servicioUsuarios, imageService, Upload, servicioSucursales) {
    let vm = this;

    vm.nuevoUsuario = {};
    vm.listaSucursales = servicioSucursales.getSucursal();
    console.log('Prueba', servicioSucursales.getSucursal());
 

    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success)  => {
      vm.provincias = success.data;
    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      vm.cantones = $http({
        method: 'GET',
        url: './sources/data/cantones.json'
      }).then((success)  => {
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
      }).then((success)  => {
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


    vm.registrarUsuario = (pNuevoUsuario/*, imgUrl*/) => {

      let objNuevoUsuario = new Usuario(pNuevoUsuario.cedula, 'imgUrl', pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta, pNuevoUsuario.contrasenna, '4', pNuevoUsuario.puesto);

      let registro = servicioUsuarios.addUsuario(objNuevoUsuario);

      if (registro == 'Se registró el usuario correctamente') {
        let sesion = JSON.parse(sessionStorage.getItem('sesion'));
        if(sesion == null || sesion.tipo != '5'){
          
          swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
            button: "Aceptar",
          }); 
          $location.path('/mainlistarEncargadoAduanas');
        }
        else{
          swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          
        }
        
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }

    }
  }
})();