(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorpaquetesEncargadoAduana', controladorpaquetesEncargadoAduana);
  
  controladorpaquetesEncargadoAduana.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorpaquetesEncargadoAduana($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;
  
    vm.listaPaquetes = servicioUsuarios.getPaquete();

    vm.cambiarEstadoTraslado = (pnuevoPaquete) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;


      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.kilometro, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion, pnuevoPaquete.sucursal, pnuevoPaquete.repartidor);
      
      new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso , pnuevoPaquete.kilometro, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion, pnuevoPaquete.sucursal, pnuevoPaquete.repartidor);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'En Sucursal');
      
      objNuevoPaquete.mostrarEstadoTraslado('En Sucursal');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarPaquete(objNuevoPaquete);
      location.reload();
  
      
    }
     
  }
  
  })();