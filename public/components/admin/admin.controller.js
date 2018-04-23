(()=>{
  'use strict';
  angular
  .module('correos')
  .controller('controladorAdmin', controladorAdmin);

  controladorAdmin.$inject = ['$state'];

  function controladorAdmin($state){
    let vm = this;

    vm.entidades = () => {
      $state.go('entidades');
    }

    vm.usuarios = () => {
      $state.go('registrarUsuarios');
    }
  }
})();