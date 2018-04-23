(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorSucursal', controladorSucursal);

    controladorSucursal.$inject = ['$http', '$state','$scope','servicioSucursales', 'servicioUsuarios']

  function controladorSucursal($http, $state, $scope, servicioSucursales,servicioUsuarios) {
    let vm = this;
    
    vm.nuevaSucursal = {};
    vm.listaSucursales = listarSucursales();
    
    vm.provincias = $http({
      method: 'GET',
      url: './sources/data/provincias.json'
    }).then((success)   => {
      vm.provincias = success.data;
      console.log(' vm.provincias',  vm.provincias);

    }, (error) => {
      console.log("Ocurrió un error " + error.data);
    });

    vm.rellenarCantones = (pidProvincia) => {
      console.log('pidProvincia', pidProvincia);
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

    listarSucursales();

    vm.registrarSucursal = (pnuevaSucursal) => {

      let objnuevaSucursal = new Sucursal(pnuevaSucursal.id, pnuevaSucursal.nombre, pnuevaSucursal.provincia, pnuevaSucursal.canton, pnuevaSucursal.distrito, pnuevaSucursal.telefono, pnuevaSucursal.horario, pnuevaSucursal.latitud, pnuevaSucursal.longitud);

      let registro = servicioSucursales.addSucursal(objnuevaSucursal);

      if (registro) {
        swal("Registro exitoso", "La sucursal ha sido registrada correctamente", "success", {
          button: "Aceptar",
        });
      } else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",

        });

      }
      vm.nuevaSucursal = null;
    
    };
    

    function listarSucursales() {
      vm.listaSucursales = servicioSucursales.getSucursal();
    }

    
  }
})();
