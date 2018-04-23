(()=>{

  'use strict';
  angular
    .module ('correos')
    .controller ('controladorArticulo', controladorArticulo);

  controladorArticulo.$inject = ['$http','$state','$stateParams','$location','servicioArticulos' ];

  function controladorArticulo ( $http, $state, $stateParams, $location, servicioArticulos ) {

  let vm = this;

  vm.nuevoArticulo = {};

  

  vm.registrarArticulo = (pNuevoArticulo)=>{

    let ArticuloTemp = new Articulo(pNuevoArticulo.id, pNuevoArticulo.producto,pNuevoArticulo.impuesto);

    servicioArticulos.addArticulo(ArticuloTemp);

    swal (
          'Registro exitoso',
          'El paquete ha sido registrado correctamente',
          'success',
          {
            button: 'Aceptar',
          }
        );
        vm.nuevoArticulo = {};



  }

  


  }



  

})();