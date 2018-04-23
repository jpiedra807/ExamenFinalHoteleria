(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorRegistrarConvenios', controladorRegistrarConvenios);
  controladorRegistrarConvenios.$inject = ['$stateParams', '$state', 'servicioEntidades']
  function controladorRegistrarConvenios($stateParams, $state, servicioEntidades) {
    let vm = this;
    
    vm.nuevoConvenio = {};
    vm.listaEntidades = servicioEntidades.getEntidades();
    vm.listaConvenios = servicioEntidades.getConvenios();

    vm.registrarConvenio = (pNuevoConvenio) => {
      
      let objNuevoConvenio = new Convenio(pNuevoConvenio.nombre, pNuevoConvenio.tipoTramite);
      let registro = servicioEntidades.addConvenio(objNuevoConvenio);

      if (registro == 'Se registró el convenio correctamente') {
        swal("Registro exitoso", "El convenio ha sido registrado correctamente", "success", {
          button: "Aceptar",}).then((value) => {
            vm.nuevoConvenio = null;
          });
        /*$location.path('/logIn');*/
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
  }
})();