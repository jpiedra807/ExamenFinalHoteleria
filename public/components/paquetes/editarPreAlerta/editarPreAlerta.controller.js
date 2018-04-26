(()=>{

'use strict';
angular
.module('correos')
.controller('controladorEditarPreAlerta', controladorEditarPreAlerta);

controladorEditarPreAlerta.$inject = ['$http','$state', '$stateParams', '$location', 'servicioUsuarios'];

function controladorEditarPreAlerta($http,$state, $stateParams, $location, servicioUsuarios) {
  let vm = this;

  vm.editarPaquete = {};

  vm.tipoArticulo = $http({
      method: 'GET',
      url: './sources/data/articulos.json',
    }).then(
      success => {
        vm.tipoArticulo = success.data;
      },
      error => {
        console.log('Ocurrió un error ' + error.data);
      }
    );
  let objPaqueteAEditar = JSON.parse($stateParams.objPaqueteTemp);
  

  let objNuevoPaquete = new Paquete(objPaqueteAEditar.usuario,objPaqueteAEditar.tracking, objPaqueteAEditar.distribuidor, objPaqueteAEditar.precio,objPaqueteAEditar.peso, objPaqueteAEditar.Kilometro, objPaqueteAEditar.tipoArticulo, objPaqueteAEditar.descripcion );

  vm.editarPaquete.tracking = objNuevoPaquete.tracking;
  vm.editarPaquete.distribuidor = objNuevoPaquete.distribuidor;
  vm.editarPaquete.precio = objNuevoPaquete.precio;
  vm.editarPaquete.peso = objNuevoPaquete.peso;
  vm.editarPaquete.Kilometro = objNuevoPaquete.kilometro;
  vm.editarPaquete.tipoArticulo = objNuevoPaquete.tipoArticulo;
  vm.editarPaquete.descripcion = objNuevoPaquete.descripcion;

  vm.cambiarEstadoPaquete = (pEstado) =>{
    let listaPaquetes = servicioUsuarios.getPaquete();

    listaPaquetes.forEach(objPaquetes =>{
      if (objPaquetes.tracking == objNuevoPaquete.tracking) {
        objPaquetes.cambiarEstadoDeActividad(pEstado);
      }
      servicioUsuarios.actualizarPaquete(objPaquetes);
    });

    if (pEstado == 'activo') {
      swal(" Activacion exitosa", "Paquete ya esta activado", "success", {
        button: "Aceptar",
      });
    }
     if (pEstado == 'inactivo') {
      swal(" Desactivacion exitosa", "Paquete ya esta desactivado", "success", {
        button: "Aceptar",
      });
    }

    
    $state.go('main.listaPreAlerta');
  };



 vm.editPrealerta = (pPrealerta)=>{
  let listaPaquetes = servicioUsuarios.getPaquete();

  listaPaquetes.forEach(objPaquete =>{
  if(objPaquete.tracking == objNuevoPaquete.tracking){
   objPaquete.tracking = pPrealerta.tracking;
   objPaquete.distribuidor = pPrealerta.distribuidor;
   objPaquete.precio = pPrealerta.precio;
   objPaquete.peso = pPrealerta.peso;
   objPaquete.kilometro = pPrealerta.kilometro;
   objPaquete.tipoArticulo = pPrealerta.tipoArticulo;
   objPaquete.descripcion = pPrealerta.descripcion;

   servicioUsuarios.actualizarPaquete(objPaquete);
  }
  });
  swal("Edición exitosa", "Paquete editado correctamente", "success", {
        button: "Aceptar",
      }); 
   $state.go ('main.listaPreAlerta');

};
}

})();