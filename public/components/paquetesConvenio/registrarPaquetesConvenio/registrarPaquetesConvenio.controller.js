(() => {
  'use strict'
  angular
    .module('correos')
    .controller('controladorRegistrarPaquetesConvenio', controladorRegistrarPaquetesConvenio);

  controladorRegistrarPaquetesConvenio.$inject = ['$location', 'servicioUsuarios', 'servicioEntidades'];

  function controladorRegistrarPaquetesConvenio($location, servicioUsuarios, servicioEntidades) {
    let vm = this;

    vm.listaClientes = getClientes();
    vm.nuevoPaqueteConvenio = {};
    vm.listaConvenios = servicioEntidades.getConvenios();

    vm.registrarPaqueteConvenio = (pNuevoPaqueteConvenio) => {
      let objPaqueteConvenioTemp = new PaqueteConv(pNuevoPaqueteConvenio.tracking, pNuevoPaqueteConvenio.cliente, pNuevoPaqueteConvenio.convenio, new Date(pNuevoPaqueteConvenio.fecha));

      let registro = servicioUsuarios.addPaqueteConvenio(objPaqueteConvenioTemp);
      if (registro == true) {
        swal("Registro exitoso", "El paquete ha sido registrado correctamente", "success", {
          button: "Aceptar",
        });
        vm.nuevoPaqueteConvenio = {};
      }
      else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
      }
    }
    
    function getClientes() {
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let listaClientes = [];
      console.log(listaUsuarios);
      listaUsuarios.forEach(usuario => {
        if (usuario.tipo == '1') {
          listaClientes.push(usuario);
        }
      });
      return listaClientes;
    }

  }
})();