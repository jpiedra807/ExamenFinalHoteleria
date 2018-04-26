(()=>{

  'use strict';
  angular
    .module ('correos')
    .controller ('controladorEditarArticulo', controladorEditarArticulo);

  controladorEditarArticulo.$inject = ['$http','$state','$stateParams','$location','servicioArticulos' ];

  function controladorEditarArticulo ( $http, $state, $stateParams, $location, servicioArticulos ) {

  let vm = this;

  vm.edicionDeArticulo = {};

  let objArticuloAEditar = JSON.parse ($stateParams.objArticuloTemp);

  let objArticuloNuevo = new Articulo (objArticuloAEditar.id, objArticuloAEditar.producto, objArticuloAEditar.impuesto);

  vm.edicionDeArticulo.producto = objArticuloAEditar.producto;
  vm.edicionDeArticulo.impuesto = objArticuloAEditar.impuesto;


  // vm.eliminarArticulo = (pEstado) =>{
  //   let listaArticulos = servicioArticulos.getArticulo ();
    

  //   listaArticulos.forEach(objArticulo =>{
  //     if (objArticulo.id == objArticuloNuevo.id) {
  //       objArticulo.cambiarEstadoDeActividadArticulo(pEstado);
  //     }
  //     servicioArticulos.actualizarArticulo (objArticulo);
      
  //   });

  //   // if (pEstado == 'activo') {
  //   //   swal(" Activacion exitosa", "Paquete ya esta activado", "success", {
  //   //     button: "Aceptar",
  //   //   });
  //   // }
  //   //  if (pEstado == 'inactivo') {
  //   //   swal(" Desactivacion exitosa", "Paquete ya esta desactivado", "success", {
  //   //     button: "Aceptar",
  //   //   });
  //   // }

    
  //   $state.go('listarArticulo');
  // };


  vm.editArticulo = (pArticulo) =>{
    let listaArticulos = servicioArticulos.getArticulo();

    listaArticulos.forEach(objEditar => {

      if (objEditar.id == objArticuloNuevo.id ) {
        
        objEditar.producto = pArticulo.producto;
        objEditar.impuesto = pArticulo.impuesto;

        servicioArticulos.actualizarArticulo(objEditar);
      }




    });
 $state.go ('main.listarArticulo');


  }

  }



  

})();