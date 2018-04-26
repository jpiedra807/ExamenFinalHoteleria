(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorListarPaquetesConvenio', controladorListarPaquetesConvenio);

  controladorListarPaquetesConvenio.$inject = ['servicioUsuarios'];

  function controladorListarPaquetesConvenio(servicioUsuarios) {
    let vm = this;

    vm.rol = servicioUsuarios.getRol();
    vm.repartidores = listarRepartidores();
    console.log(vm.repartidores)

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

    if(vm.rol  == '1'){
      vm.listaPaquetesConvenio = servicioUsuarios.getPaquetesConvenio();
    }
    else{
      vm.listaPaquetesConvenio = servicioUsuarios.getAllPaquetesConvenio();
    }
    
    
    console.log(vm.listaPaquetesConvenio);
    
    vm.solicitarEnvio = (pPaquete) =>{
      servicioUsuarios.solicitarEnvioPaqueteConvenio(pPaquete);
    }
  }
})();