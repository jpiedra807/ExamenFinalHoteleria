(() => {
  'use strict';
  angular
      .module('correos')
      .service('servicioSucursales', servicioSucursales)

  servicioSucursales.$inject = ['$log', '$http','dataStorageFactory'];

  function servicioSucursales($log, $http, dataStorageFactory) {


      let publicAPI = {
        addSucursal: _addSucursal,
        getSucursal: _getSucursal,
        actualizarSucursal: _actualizarSucursal
        // listarSucursalesJson : _listarSucursalesJson
        
            }
    return publicAPI
    
    
    // listarSucursales();
            
    function _addSucursal (pnuevaSucursal){
        let registroExitoso = false;
        
        registroExitoso = dataStorageFactory.setSucursalesData(pnuevaSucursal);

        return registroExitoso;
         
        }

      function _getSucursal() {
          let listaSucursal = [];
          let listaSucursalDB = dataStorageFactory.getSucursalesData();
          listaSucursalDB.forEach(objSucursal => {

              let objSucursalTemp = new Sucursal(objSucursal.id, objSucursal.nombre, objSucursal.provincia, objSucursal.canton, objSucursal.distrito, objSucursal.telefono, objSucursal.horario, objSucursal.latitud, objSucursal.longitud, objSucursal.estado)

            listaSucursal.push(objSucursalTemp);

          });

          return listaSucursal;
        
    };
    

    // function _listarSucursalesJson(){

    //     let listaSucursalCompleta = [
    //         {
    //             "id" : "1500",
    //             "nombre : "Acosta",
    //             "provincia" : "San José",
    //             "canton" : "Acosta",
    //             "distrito" : "San Ignacio",
    //             "telefono" : "2410-0095",
    //             "horario" : "Lunes a Viernes 8:00am-5:00pm"
    //             "latitud": "9.7980573",
    //             "longitud": "84.16135"
            
    
    //         },

    //         {
    //             id : 1000,
    //             nombre : "Administracion Central",
    //             provincia : 'San José',
    //             canton : 'San José',
    //             distrito : 'Merced',
    //             telefono : '2223-9766',
    //             horario : 'Lunes a Viernes de 7:30am-6:00pm'
    
    //         },
    //         {
    //             id : 1400,
    //             nombre : 'Sucursal Alajuelita',
    //             provincia : 'San José',
    //             canton : 'Alajuelita',
    //             distrito : 'Alajuelita',
    //             telefono : '2254-6822',
    //             horario : 'Lunes a Viernes de 8: 00 a 12:00 y 1:00 a 5:00pm'
    
    //         },
    //         {
    //             id : 1450,
    //             nombre : 'Sucursal Aserrí',
    //             provincia : 'San José',
    //             canton : 'Aserrí',
    //             distrito : 'Aserrí',
    //             telefono : '2230-6242',
    //             horario : '  '
    
    //         },
    //         {
    //             id : 1005,
    //             nombre : 'Sucursal Barrio México',
    //             provincia : 'San José',
    //             canton : 'San José',
    //             distrito : 'Merced',
    //             telefono : '2258-2104',
    //             horario : 'Lunes a Viernes 8:00am-5:00pm'
    
    //         },
    //         {
    //             id : 4417,
    //             nombre : 'Sucursal La Fortuna',
    //             provincia : 'Alajuela',
    //             canton : 'San Carlos',
    //             distrito : 'La Fortuna',
    //             telefono : '2479-8070',
    //             horario : 'Lunes a Viernes 8:00am-5:30pm'
    
    //         },
    //         {
    //             id : 4450,
    //             nombre : 'Sucursal Los Chiles',
    //             provincia : 'Alajuela',
    //             canton : 'Los Chiles',
    //             distrito : 'Los Chiles',
    //             telefono : '2471-1061',
    //             horario : 'Lunes a Viernes 8:00am-5:30pm'
    
    //         },
    //         {
    //             id : 7050,
    //             nombre : 'Sucursal Cartago',
    //             provincia : 'Cartago',
    //             canton : 'Cartago',
    //             distrito : 'Occidental',
    //             telefono : '2552-4595',
    //             horario : 'Lunes a Viernes 8:00am-5:00pm'
    
    //         },
    //         {
    //             id : 7100,
    //             nombre : 'Sucursal Paraíso',
    //             provincia : 'Cartago',
    //             canton : 'Paraíso',
    //             distrito : 'Paraíso',
    //             telefono : '2574-7660',
    //             horario : 'Lunes a Viernes 8:00am-5:00pm'
    
    //         },
    //         {
    //             id : 3071,
    //             nombre : 'Sucursal Río Frío',
    //             provincia : 'Heredia',
    //             canton : 'Sarapiquí',
    //             distrito : 'Sarapiquí',
    //             telefono : 'Sarapiquí',
    //             horario : 'Lunes a Viernes 8:00am-5:30pm'
    
    //         },
    //         {
    //             id : 4005,
    //             nombre : 'Sucursal Belén',
    //             provincia : 'Heredia',
    //             canton : 'Belén',
    //             distrito : 'San Antonio',
    //             telefono : '2239-4797',
    //             horario : 'Lunes a Viernes 8:00am-5:00pm'
    
    //         },
    //         {
    //             id : 7200,
    //             nombre : 'Sucursal Siquirres',
    //             provincia : 'Limón',
    //             canton : 'Siquirres',
    //             distrito : 'Siquirres',
    //             telefono : '2768-5437',
    //             horario : 'Lunes a Viernes 8:00am-5:00pm'
    
    //         },
    //         {
    //             id : 7210,
    //             nombre : 'Sucursal Guápiles',
    //             provincia : 'Limón',
    //             canton : 'Pococí',
    //             distrito : 'Guápiles',
    //             telefono : '2710-6161',
    //             horario : 'Lunes a Viernes 8:00am-5:00pm'
    
    //         },

            
    //     ];
        
    //     if(JSON.parse(localStorage.getItem("sucursalLS")) == null){
            
    //         listaSucursalCompleta.forEach(pSucursal => {
    //             let objNuevaSucursal = new Sucursal (pSucursal.id, pSucursal.nombre, pSucursal.provincia,pSucursal.canton, pSucursal.distrito, pSucursal.telefono, pSucursal.horario);
    
    //             _addSucursal(objNuevaSucursal);
    //         });
            
    //     }
    // };
    // listaSucursalCompleta = new Sucursal (
    //   [1500, 1000],
    //   ["Acosta", "(Administracion Central)"],
    //   ["San Jose","San Jose" ],
    //   ["Acosta", "San Jose"],
    //   ["San Ignacio", "Merced"],
    //   ["2410-0095", "2223-9766"]
    //   ["(Lunes a Viernes 8:00am-5:00pm)","(Lunes a Viernes de 7:30am-6:00pm)"]
      
    // );

    function _actualizarSucursal(pSucursal) {
        let modificarExitosamente = false;
            
        modificarExitosamente = dataStorageFactory.updateSucursalesData(pSucursal);

        return modificarExitosamente;
    };

    // function actualizarSucursalLocal(plistaActualizadaSucursal) {
        
    //     localStorage.setItem('sucursalLS', JSON.stringify(plistaActualizadaSucursal));
    // }

  }
})();