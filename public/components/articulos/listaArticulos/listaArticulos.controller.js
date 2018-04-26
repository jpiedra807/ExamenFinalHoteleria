(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListaArticulo', controladorListaArticulo);
    
    controladorListaArticulo.$inject = ['$http', '$state','$scope', '$location','$stateParams', 'servicioArticulos']

      function controladorListaArticulo($http, $state, $scope, $location,$stateParams, servicioArticulos) {
        let vm = this;

        vm.editArticulo = (pArticulo)=>{


          
        $state.go('main.editarArticulo', {objArticuloTemp : JSON.stringify(pArticulo)});
        };
        
        servicioArticulos.listarArticulosJson();
        listarArticulo();
        
        
    
         vm.listaArticulos = listarArticulo();

        function listarArticulo(){
        let listaArticulos = servicioArticulos.getArticulo();

        return listaArticulos;
      }


       vm.eliminarArticulo = (pEstado,pArticulo ) =>{
    let listaArticulos = servicioArticulos.getArticulo ();
    

    listaArticulos.forEach(objArticulo =>{
      if (objArticulo.id == pArticulo.id) {
        objArticulo.cambiarEstadoDeActividadArticulo(pEstado);
      }
      servicioArticulos.actualizarArticulo (objArticulo);

      
    });

 


    // if (pEstado == 'activo') {
    //   swal(" Activacion exitosa", "Paquete ya esta activado", "success", {
    //     button: "Aceptar",
    //   });
    // }
    //  if (pEstado == 'inactivo') {
    //   swal(" Desactivacion exitosa", "Paquete ya esta desactivado", "success", {
    //     button: "Aceptar",
    //   });
    // }

    
    vm.listaArticulos = listarArticulo ();


  };

    }
 })();