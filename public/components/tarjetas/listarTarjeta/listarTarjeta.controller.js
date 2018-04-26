(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorListarTarjetas', controladorListarTarjetas);
  controladorListarTarjetas.$inject = ['$state','$stateParams','$location','servicioUsuarios'];

      function controladorListarTarjetas($state, $stateParams, $location, servicioUsuarios) {
        let vm = this;
        
        vm.editTarjeta = (pTarjeta) => {
          $state.go('main.editarTarjetas', {objTarjetaTemp: JSON.stringify(pTarjeta) });
    
        };
    
        
         vm.listaTarjeta = ListarTarjetas();

        function ListarTarjetas() {
          // let usuarios = servicioUsuarios.getUsuarios();
          let usuariosDB = servicioUsuarios.getUsuarios();
          let usuarioSession = JSON.parse(sessionStorage.getItem('sesion'));
          let tarjetasDB = servicioUsuarios.getTarjeta();
          let listaTarjeta = [];

          usuariosDB.forEach(objUsuario => {
            if (objUsuario.correo == usuarioSession.correo){
              objUsuario.listaTarjetas.forEach(objTarjetaID => {
                tarjetasDB.forEach(objTarjeta =>{
                  if (objTarjetaID.tarjetaID == objTarjeta.id){
                    listaTarjeta.push(objTarjeta);
                  }
                } )
              })
            }
          });
          
          // for (let i = 0; i < usuariosDB.length; i++) {
          //   if (usuariosDB[i].correo == usuarioSession.correo) {
          //     for (let j = 0; j < tarjetasDB.length; j++) {
          //       if (tarjetasDB[j].id == usuariosDB[i].listaTarjetas.id){
                  
          //         listaTarjeta.push(tarjetasDB[j]);
          //       }
          //     }
          //   }



          // }
          console.log('listaTarjeta',listaTarjeta);
          return listaTarjeta;

        }



        
      }

    
 })();

