(() => {
'use strict'
angular
.module('correos')
.controller('controladorPerfilRepartidor',controladorPerfilRepartidor);

controladorPerfilRepartidor.$inject = ['$stateParams', '$state', '$location', 'servicioUsuarios'];

function controladorPerfilRepartidor($stateParams, $state, $location, servicioUsuarios)


});