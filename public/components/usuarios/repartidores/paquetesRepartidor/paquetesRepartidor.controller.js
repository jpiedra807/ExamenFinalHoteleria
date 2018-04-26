(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorPaquetesRepartidor', controladorPaquetesRepartidor);
  
  controladorPaquetesRepartidor.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorPaquetesRepartidor($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;
  
    vm.listaPaquetes = servicioUsuarios.getAllPaquetes();
    vm.rolNombre = servicioUsuarios.getRolNombre(); 

    vm.cambiarEstadoTraslado4 = (pnuevoPaquete) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;
      console.log(articulo);


 
      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion, pnuevoPaquete.sucursal, pnuevoPaquete.repartidor);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'En tránsito a domicilio');
      
      objNuevoPaquete.mostrarEstadoTraslado('En tránsito a domicilio');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarEstadoPaquete(objNuevoPaquete);
      location.reload();
    }

    vm.cambiarEstadoTraslado5 = (pnuevoPaquete) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;
      console.log(articulo);


 
      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion, pnuevoPaquete.sucursal, pnuevoPaquete.repartidor);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'Entregado');
      
      objNuevoPaquete.mostrarEstadoTraslado('Entregado');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarEstadoPaquete(objNuevoPaquete);
      location.reload();

    }

    
    vm.cambiarEstadoTraslado5 = (pnuevoPaquete) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;


 
      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'Entregado');
      
      objNuevoPaquete.mostrarEstadoTraslado('Entregado');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarEstadoPaquete(objNuevoPaquete);

    }
  
  }

  
  
  })();