(() => {
  'use strict';
  angular
    .module ('correos')
    .controller ('controladorArticuloDesactivado', controladorArticuloDesactivado);

  controladorArticuloDesactivado.$inject = [
    '$http',
    '$state',
    '$scope',
    '$location',
    '$stateParams',
    'servicioArticulos',
  ];

  function controladorArticuloDesactivado (
    $http,
    $state,
    $scope,
    $location,
    $stateParams,
    servicioArticulos
  ) {
    let vm = this;

    vm.editArticulo = pArticulo => {
      $state.go ('main.editarArticulo', {
        objArticuloTemp: JSON.stringify (pArticulo),
      });
    };

    servicioArticulos.listarArticulosJson ();
    listarArticulo ();

    vm.listaArticulos = listarArticulo ();

    function listarArticulo () {
      let listaArticulos = servicioArticulos.getArticulo ();

      return listaArticulos;
    }

    vm.articulo = (pEstado, pArticulo) => {
      let listaArticulos = servicioArticulos.getArticulo ();

      listaArticulos.forEach (objArticulo => {
        if (objArticulo.id == pArticulo.id) {
           if (pEstado == 'eleminado') {
        swal(" El articulo sera eleminado", "desea eliminar?", "warning", {
          buttons: {
    cancel: false,
    confirm: true
  }
        });

        objArticulo.cambiarEstadoDeActividadArticulo (pEstado);
        
      }else{
       objArticulo.cambiarEstadoDeActividadArticulo (pEstado);

      }


          
        }
        servicioArticulos.actualizarArticulo (objArticulo);
      });

     
       

      vm.listaArticulos = listarArticulo ();
    };
  }
}) ();
