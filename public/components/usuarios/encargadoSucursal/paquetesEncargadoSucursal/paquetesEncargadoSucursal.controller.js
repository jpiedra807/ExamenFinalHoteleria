(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorPaquetesEncargadoSucursal', controladorPaquetesEncargadoSucursal);
  
  controladorPaquetesEncargadoSucursal.$inject = ['$state', '$stateParams', '$location', 'servicioUsuarios'];
  
  function controladorPaquetesEncargadoSucursal($state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    vm.listaPaquetes = servicioUsuarios.getPaquete(); 
    vm.listaRepartidores = listarRepartidores();  
    vm.rolSucursal = servicioUsuarios.getRolSucursal();  
    


    vm.asignarRepartidor = (pnuevoPaquete, pnombre) => {
      
      let articulo = pnuevoPaquete.tipoArticulo;

      let repartidor = pnombre;
 
      let objNuevoPaquete = new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso, pnuevoPaquete.kilometro, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion, pnuevoPaquete.sucursal, pnombre);
      
      new Paquete(pnuevoPaquete.usuario, pnuevoPaquete.tracking, pnuevoPaquete.distribuidor, pnuevoPaquete.precio, pnuevoPaquete.peso , pnuevoPaquete.kilometro, pnuevoPaquete.tipoArticulo, pnuevoPaquete.descripcion, pnuevoPaquete.sucursal, pnombre);

      let listaEstados = pnuevoPaquete.listaEstados;

      listaEstados.forEach(objEstado => {
        objNuevoPaquete.addEstado(objEstado);
        
      });
     
      let fecha = new Date();
      let hora = fecha;
      let objEstado = new Estado(pnuevoPaquete.usuario, fecha,hora, 'Asignado');
      
      objNuevoPaquete.mostrarEstadoTraslado('Asignado');
      objNuevoPaquete.addEstado(objEstado);
      servicioUsuarios.actualizarPaquete(objNuevoPaquete);
      location.reload();
  
      
    }



    function listarRepartidores(){
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaRepartidores = [];
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '3') {
          listaRepartidores.push(usuario);
        }
      });
      return listaRepartidores;
    } 
  
  }

  
  
  })();