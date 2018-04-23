(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRepartidores', controladorRepartidores);
    
    controladorRepartidores.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios', 'imageService','Upload', 'servicioSucursales'];

  function controladorRepartidores($http ,$state, $stateParams, $location, servicioUsuarios, imageService, Upload, servicioSucursales) {
    let vm = this;

    // vm.listaRepartidores = listarRepartidores();
    vm.nuevoRepartidor = {};
   // servicioSucursales.listarSucursalesJson();
    vm.listaSucursales = servicioSucursales.getSucursal();
    
    vm.cloudObj = imageService.getConfiguration();

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


    // vm.editRepartidor = (pUsuario) =>{
    //   $state.go('main.editarRepartidor', {objRepartidorTemp : JSON.stringify(pUsuario)});
    // };

    vm.listaRepartidor=() => {
      $state.go('main.listarRepartidores')
    }
    
    
    vm.registrarRepartidor = (pNuevoUsuario) => {
      

      let objLicencia = new Licencia(pNuevoUsuario.numLicencia,
        pNuevoUsuario.tipoLicencia, pNuevoUsuario.vencimientoLicencia)

         let licencias = [];
         licencias.push(objLicencia);
        


      

      let objNuevoRepartidor = new Usuario(pNuevoUsuario.cedula, 'imgUrl', pNuevoUsuario.primerNombre, pNuevoUsuario.segundoNombre, pNuevoUsuario.primerApellido, pNuevoUsuario.segundoApellido, pNuevoUsuario.correo, pNuevoUsuario.telefono, pNuevoUsuario.fechaNacimiento, pNuevoUsuario.provincia, pNuevoUsuario.canton, pNuevoUsuario.distrito, pNuevoUsuario.direccionExacta,pNuevoUsuario.contrasenna, '3', pNuevoUsuario.sucursalAsignada, ' ',pNuevoUsuario.vehiculo, licencias);


      let registro = servicioUsuarios.addUsuario(objNuevoRepartidor);


      if (registro == 'Se registró el usuario correctamente') {
        let sesion = JSON.parse(sessionStorage.getItem('sesion'));
        if(sesion == null || sesion.tipo != '3'){
          
          swal("Registro exitoso", "El repartidor ha sido registrado correctamente", "success", {
            button: "Aceptar",
          }); 
          $location.path('/logIn');
        }
        else{
          swal("Registro exitoso", "El repartidor ha sido registrado correctamente", "success", {
            button: "Aceptar",
          });
          $location.path('/main/listarRepartidor');
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


