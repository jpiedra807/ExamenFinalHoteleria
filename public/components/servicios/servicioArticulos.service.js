(() => {
  'use strict';
  angular.module ('correos').service ('servicioArticulos', servicioArticulos);

  servicioArticulos.$inject = ['$log', '$http', 'dataStorageFactory'];

  function servicioArticulos ($log, $http, dataStorageFactory) {
  

    let publicAPI = {
      addArticulo: _addArticulo,
      getArticulo: _getArticulo,
      listarArticulosJson: _listarArticulosJson,
      actualizarArticulo: _actualizarArticulo

    };
    return publicAPI;

    function _addArticulo (pNuevoArticulo) {
      let listaArticulos = _getArticulo (),
          registroExitoso,
          articuloRepetido = false;


       for (let i = 0; i < listaArticulos.length; i++) {
         if (pNuevoArticulo.id == listaArticulos[i].id) {

           articuloRepetido = true;
         }
       }

       if (articuloRepetido === false){
         registroExitoso = dataStorageFactory.setArticuloData(pNuevoArticulo);

       }else{
         registroExitoso = false;
         
       }
            return registroExitoso;
       
    }


    function _getArticulo() {
      let listaArticulos = [];
      let listaArticulosBD = dataStorageFactory.getArticuloData();


      if (listaArticulosBD == null) {
        listaArticulos = [];
      } else {
        listaArticulosBD.forEach (objArticulo => {
          let objArticuloTemp = new Articulo (
            objArticulo.id,
            objArticulo.producto,
            objArticulo.impuesto
            
          );

          objArticuloTemp.cambiarEstadoDeActividadArticulo (objArticulo.estado);


          listaArticulos.push (objArticuloTemp);
        });
      }
      return listaArticulos;
    }
  

  function _listarArticulosJson() {
    let listaArticulosCompleta = [
      // {
      //   id: 1,
      //   producto: 'Guitarra Acústica - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 2,
      //   producto: 'Adaptador - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 3,
      //   producto: 'Agenda (Papel) - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 4,
      //   producto: 'filtro de aire / aceite24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 5,
      //   producto: 'Air Bag - (0.00%)',
      //   impuesto: 0
      // },
      // {
      //   id: 6,
      //   producto: 'Alarma - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 7,
      //   producto: 'Ampoptionfier - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 8,
      //   producto: 'Antena - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 9,
      //   producto: 'Auto Body Parts - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 10,
      //   producto: 'Motor de auto - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 11,
      //   producto: 'Asiento de coche para bebé - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 12,
      //   producto: 'Baterías (AAA / AA, C, D) - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 13,
      //   producto: 'Cargadores - (42,38%)',
      //   impuesto: 42.38
      // },
      // {
      //   id: 14,
      //   producto: 'Llantas de bicicleta y una motocicleta - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 15,
      //   producto: 'Cuadro de bicicleta - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 16,
      //   producto: 'Piezas de bicicleta - (14.13%)',
      //   impuesto: 14.13
      //  },
      // {
      //   id: 17,
      //   producto: 'Bicicleta Profecional - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 18,
      //   producto: 'Triciclo - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 19,
      //   producto: 'Binoculares - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 20,
      //   producto: 'Blender - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 21,
      //   producto: 'Body Locion - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 22,
      //   producto: 'Libro - (1.00%)',
      //   impuesto: 1
      // },
      // {
      //   id: 23,
      //   producto: 'Frenos y partes - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 24,
      //   producto: 'Maletín - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 25,
      //   producto: 'Calculadora - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 26,
      //   producto: 'Cámara (digital) - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 27,
      //   producto: 'Cámara (tradicional) - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 28,
      //   producto: 'Accesorios de la cámara - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 29,
      //   producto: 'Tienda de campaña - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 30,
      //   producto: 'Partes del cuerpo del automóvil - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 31,
      //   producto: 'Opciones del auto - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 32,
      //   producto: 'Car Mirror - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 33,
      //   producto: 'Car Rack - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 34,
      //   producto: 'Car Rims - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 35,
      //   producto: 'Suspensión del automóvil - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 36,
      //   producto: 'Rueda del coche - (42.27%)',
      //   impuesto: 42.27

      // },
      // {
      //   id: 37,
      //   producto: 'Alfombra - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 38,
      //   producto: 'CD / DVD ROM (externo) - (49.00%)',
      //   impuesto: 49.00
      // },
      // {
      //   id: 39,
      //   producto: 'CD Video Games - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 40,
      //   producto: "CD's - (24.30%)",
      //   impuesto: 24.30
      // },
      // {
      //   id: 41,
      //   producto: 'Grabadora externa de CD / DVD - (49.00%)',
      //   impuesto: 49.00
      // },
      // {
      //   id: 42,
      //   producto: 'Quemador interno de CD / DVD - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 43,
      //   producto: 'CD / DVD ROM (interno) - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 44,
      //   producto: 'Platos de cerámica - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 45,
      //   producto: 'Cargador - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 46,
      //   producto: 'Chip (computadora) - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 47,
      //   producto: 'Ropa - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 48,
      //   producto: 'Embrague - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 49,
      //   producto: 'Coffee Maker - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 50,
      //   producto: 'Monedas - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id:51,
      //   producto: 'Comic Books - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 52,
      //   producto: 'Teclado de computadora - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 53,
      //   producto: 'Computadora (normal o portátil) - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 54,
      //   producto: 'Accesorios externos de computadora - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 55,
      //   producto: 'Lente de contacto - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 56,
      //   producto: 'Copiar máquina - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 57,
      //   producto: 'CPU case - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 58,
      //   producto: 'Cortinas - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 59,
      //   producto: 'Platillos - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 60,
      //   producto: 'Dampers - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 61,
      //   producto: 'Diskman o walkman - (49.00%)',
      //   impuesto: 49.00
      // },
      // {
      //   id: 62,
      //   producto: 'Vaso de agua potable - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 63,
      //   producto: 'Tambor - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 64,
      //   producto: 'Drum Set - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 65,
      //   producto: 'Drumstick - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 66,
      //   producto: 'Reproductor de DVD - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 67,
      //   producto: 'Grabador de DVD (externo) - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 68,
      //   producto: 'Grabador para computadora - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 69,
      //   producto: "DVD's - (13.00%)",
      //   impuesto: 13.00
      // },

      // {
      //   id: 70,
      //   producto: 'Guitarra eléctrica - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 71,
      //   producto: 'Calentador de agua eléctrico - (68.60%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 72,
      //   producto: 'Organizador Electrónico - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 73,
      //   producto: 'Partes del motor - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 74,
      //   producto: 'Disco duro externo - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 75,
      //   producto: 'Anteojos - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 76,
      //   producto: 'Faucets - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 77,
      //   producto: 'Fish Hook - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 78,
      //   producto: 'Carrete de pesca - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 79,
      //   producto: 'Caña de pescar - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 80,
      //   producto: 'Accesorios de gimnasia - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 81,
      //   producto: 'Cubiertos - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 82,
      //   producto: 'Bombilla fluorescente - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 83,
      //   producto: 'Parte Forkoptionft - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 84,
      //   producto: 'Freidora - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 85,
      //   producto: 'Muebles - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 86,
      //   producto: 'Fuse - (14.13%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 87,
      //   producto: 'Herramientas de jardín - (1.00%)',
      //   impuesto: 1
      // },
      // {
      //   id: 88,
      //   producto: 'Pelotas de golf - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 89,
      //   producto: 'Clubes de golf - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 90,
      //   producto: 'Pedal de guitarra - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 91,
      //   producto: 'Secador de pelo - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 92,
      //   producto: 'Hairstyoptionng Iron - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 93,
      //   producto: 'Hairstyoptionng productos - (68.60%)',
      //   impuesto: 68.60
      // },
      // {
      //   id: 94,
      //   producto: 'Herramientas de mano - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 95,
      //   producto: 'Calentador - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 96,
      //   producto: 'Home appoptionances - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 97,
      //   producto: 'Sistema de cine en casa - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 98,
      //   producto: 'Cuerno - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 99,
      //   producto: 'Manguera - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 100,
      //   producto: 'Hydrauoptionc Jack - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 101,
      //   producto: 'Tinta - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 102,
      //   producto: 'iPAD - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 103,
      //   producto: 'Joyería - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 104,
      //   producto: 'Karaoke - (49.00%)',
      //   impuesto: 49.00
      // },
      // {
      //   id: 105,
      //   producto: 'Lámpara - (29.95%)',
      //   impuesto: 29.95
      // },

      // {
      //   id: 106,
      //   producto: 'Lawn Mower - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 107,
      //   producto: 'optionght Bulb - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 108,
      //   producto: 'optionngerie - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 109,
      //   producto: 'Colchón - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 110,
      //   producto: 'Tarjeta madre - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 111,
      //   producto: 'Microscopio - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 112,
      //   producto: 'Microondas - (37.58%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 113,
      //   producto: 'Mezclador - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 114,
      //   producto: 'Monitor con acceso a VGA - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 115,
      //   producto: 'Monitor  - (49.27%) ',
      //   impuesto: 49.27
      // },
      // {
      //   id: 116,
      //   producto: 'Amortiguador de motocicleta - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 117,
      //   producto: 'Casco de moto - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 118,
      //   producto: 'Parte de la motocicleta - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 119,
      //   producto: 'Reproductor de MP3 y MP4, iPod - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 120,
      //   producto: 'Mufla - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 121,
      //   producto: 'Accesorios musicales - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 122,
      //   producto: 'Instrumentos musicales - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 123,
      //   producto: 'Teclado musical - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 124,
      //   producto: 'Bomba de aceite - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 125,
      //   producto: 'Adornos - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 126,
      //   producto: 'Adornos (piedra) - (14.30%)',
      //   impuesto: 29.95
      // },

      // {
      //   id: 127,
      //   producto: 'Pinturas - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 128,
      //   producto: 'Papel - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 129,
      //   producto: 'Party Suppoptiones - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 130,
      //   producto: 'Procesador de PC - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 131,
      //   producto: 'Instrumentos musicales de percusión - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 132,
      //   producto: 'Perfume - (30.00%)',
      //   impuesto: 30.00
      // },
      // {
      //   id: 133,
      //   producto: 'Personal Shaver (eléctrico) - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 134,
      //   producto: 'Piñón - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 135,
      //   producto: 'Estufa portátil42.38%)',
      //   impuesto: 42.38
      // },
      // {
      //   id: 136,
      //   producto: 'Cartel - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 137,
      //   producto: 'Ollas y sartenes - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 138,
      //   producto: 'Impresora - (13.00%)',
      //   impuesto: 13.00
      // },

      // {
      //   id: 139,
      //   producto: 'Parte de la impresora - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 140,
      //   producto: 'Accesorios del proyector - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 141,
      //   producto: 'Raqueta - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 142,
      //   producto: 'Radiador - (42.78%)',
      //   impuesto: 42.78
      // },
      // {
      //   id: 143,
      //   producto: 'Refrigerador - (81.48%)',
      //   impuesto: 81.48
      // },
      // {
      //   id: 144,
      //   producto: 'Control remoto - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 145,
      //   producto: 'Roller / Ice Skates - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 146,
      //   producto: 'Router - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 147,
      //   producto: 'Cinturón de seguridad - (41.65%)',
      //   impuesto: 41.65
      // },
      // {
      //   id: 148,
      //   producto: 'Máquina de coser - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 149,
      //   producto: 'Shampoo - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 150,
      //   producto: 'Afeitadoras (desechables) - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 151,
      //   producto: 'Hojas - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 152,
      //   producto: 'Zapatos - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 153,
      //   producto: 'Signal Generator - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 154,
      //   producto: 'Saco de dormir - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 155,
      //   producto: 'Balón de fútbol - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 156,
      //   producto: 'Software - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 157,
      //   producto: 'Spark Plug - (42.38%)',
      //   impuesto: 42.38
      // },
      // {
      //   id: 158,
      //   producto: 'Oradores - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 159,
      //   producto: 'Starter (Auto) - (42.38%)',
      //   impuesto: 42.38
      // },
      // {
      //   id: 160,
      //   producto: 'Stereo  - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 161,
      //   producto: 'Instrumentos de cuerda - (30.00%)',
      //   impuesto: 30.00
      // },
      // {
      //   id: 162,
      //   producto: 'Cochecito - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 163,
      //   producto: 'Tabla de surf - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 164,
      //   producto: 'Juegos de mesa - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 165,
      //   producto: 'Tableta - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 166,
      //   producto: 'Tacómetro - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 167,
      //   producto: 'Teléfono (Normal y Celular) - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 168,
      //   producto: 'Auriculares telefónicos - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 169,
      //   producto: 'Telescopio - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 170,
      //   producto: 'Televisión - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 171,
      //   producto: 'Toallas - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 172,
      //   producto: 'Juguete - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 173,
      //   producto: 'Transformador - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 174,
      //   producto: 'Transistores - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 175,
      //   producto: 'Banda de transmisión - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 176,
      //   producto: 'Trípode - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 178,
      //   producto: 'Paraguas - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 179,
      //   producto: 'UPS - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 180,
      //   producto: 'Unidad flash USB - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 181,
      //   producto: 'Aspirador - (49.27%)',
      //   impuesto: 49.27
      // },
      // {
      //   id: 182,
      //   producto: 'Válvulas - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 183,
      //   producto: 'Videocámara - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 184,
      //   producto: 'Video Game Console - (55.55%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 185,
      //   producto: 'Video Game Control - (55.71%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 186,
      //   producto: 'Videojuegos PSP / DS - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 187,
      //   producto: 'Video proyector - (31.08%)',
      //   impuesto: 31.08
      // },
      // {
      //   id: 188,
      //   producto: 'disco de vinilo - (29.95%)',
      // },
      // {
      //   id: 189,
      //   producto: 'Walkie Talkies - (13.00%)',
      //   impuesto: 13.00
      // },
      // {
      //   id: 190,
      //   producto: 'Relojes y Relojes - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 191,
      //   producto: 'Filtro de agua - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 192,
      //   producto: 'Bomba de agua - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 193,
      //   producto: 'Weigh Scale - (14.13%)',
      //   impuesto: 14.13
      // },
      // {
      //   id: 194,
      //   producto: 'Ruedas - (24.30%)',
      //   impuesto: 24.30
      // },
      // {
      //   id: 195,
      //   producto: 'Peluca - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 196,
      //   producto: 'Parabrisas - (19.78%)',
      //   impuesto: 19.78
      // },
      // {
      //   id: 197,
      //   producto: 'Alambre - (29.95%)',
      //   impuesto: 29.95
      // },
      // {
      //   id: 198,
      //   producto: 'Instrumento de viento - (24.30%)',
      //   impuesto: 24.30
      // }
    ];


      if(JSON.parse(localStorage.getItem('articulosLS')) == null){
            
            listaArticulosCompleta.forEach(pArticulo => {
                let objNuevoArticulo = new Articulo(pArticulo.id, pArticulo.producto, pArticulo.impuesto);
    
                _addArticulo(objNuevoArticulo);
            });
            
        }
  };

  function _actualizarArticulo(pObjEditar) {
    let listaArticulos = _getArticulo();

    for (let i = 0; i < listaArticulos.length; i++) {
      if (listaArticulos[i].id == pObjEditar.id ) {
        listaArticulos[i] = pObjEditar;

      }
    }
    actualizarArticuloLocal(listaArticulos);
  };
  function actualizarArticuloLocal (plistaActualizada) {
    localStorage.setItem ('articulosLS', JSON.stringify (plistaActualizada));
  }
  }
}) ();
