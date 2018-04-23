(() => {
  'use strict';
  angular
  .module('correos')
  .service('servicioLogin', servicioLogin);

  servicioLogin.$inject = ['$log', '$http', 'servicioUsuarios', 'servicioSesion'];

  function servicioLogin($log, $http, servicioUsuarios, servicioSesion){

    let publicAPI = {
      inicioSesion : _inicioSesion,
      cerrarSesion: _cerrarSesion
    }
    return publicAPI
    
    function _inicioSesion(pCredenciales) {
      
      let listaUsuarios = servicioUsuarios.getUsuarios();
      let incioExitoso = false;

      for(let i = 0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i].correo == pCredenciales.correo && listaUsuarios[i].contrasenna == pCredenciales.contrasenna){
          servicioSesion.crear(
            {
              nombre: listaUsuarios[i].primerNombre,
              correo: listaUsuarios[i].correo,
              contrasenna: listaUsuarios[i].contrasenna,
              tipo: listaUsuarios[i].tipo,
              sucursalAsignada: listaUsuarios[i].sucursalAsignada
            }
          );
          incioExitoso = true;
        }
      }

      return incioExitoso;
    }
    function _cerrarSesion(){
      servicioSesion.destruir();
      swal("Sesión cerrada", "Sesión cerrada correctamente", "success", {
        button: "Aceptar",
      });
    }
  }

})();