(() => {
  'use strict';
  angular.module ('correos').factory ('dataStorageFactory', dataStorageFactory);

  dataStorageFactory.$inject = ['$q', '$log', '$http'];

  function dataStorageFactory ($q, $log, $http) {
    const localAPI = {
      getUsersData: _getUsersData,
      setUserData: _setUserData,
      updateUserData: _updateUserData,
      setEntidadData: _setEntidadData,
      getEntidadesData: _getEntidadesData,
      setSession: _setSession,
      closeSession: _closeSession,
      getSession: _getSession,
      getArticuloData: _getArticuloData,
      setArticuloData: _setArticuloData,
      getPaquetesData: _getPaquetesData,
      setPaqueteData: _setPaqueteData,
      updatePaqueteData: _updatePaqueteData,
      getConveniosData: _getConveniosData,
      setConvenioData: _setConvenioData,
      getTarjetasData: _getTarjetasData,
      setTarjetasData: _setTarjetasData,
      sendMail: _sendMail,
      buscarEntidadPorId: _buscarEntidadPorId,
      agregarConvenio: _agregarConvenio,
      getPaquetesConvenioData: _getPaquetesConvenioData,
      setPaqueteConvenioData: _setPaqueteConvenioData,
      buscarUsuarioPorId: _buscarUsuarioPorId,
      agregarPaqueteConvenio: _agregarPaqueteConvenio,
      setEstadoData: _setEstadoData,
      getEstadoData: _getEstadoData,
      agregarEstado: _agregarEstado,
      buscarPaquetePorId: _buscarPaquetePorId,
      agregarTarjetaUsuario: _agregarTarjetaUsuario,
      agregarPaquete: _agregarPaquete,
      getSucursalesData: _getSucursalesData,
      setSucursalesData: _setSucursalesData,
      updateSucursalesData: _updateSucursalesData,
      buscarSucursalPorId: _buscarSucursalPorId,
      setLicencias: _setLicenciaData,
      updateTarjetasData: _updateTarjetasData
    };
    return localAPI;

    /**
     * Funcion que obtiene los datos de los usuarios del back end y los retorna
     */

    //
    //Inicio usuarios
    //

    function _getUsersData () {
      let listaUsuarios = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_users',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (usuarios => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (usuarios);
        listaUsuarios = usuarios;
      });
      peticion.fail (() => {
        listaUsuarios = [];
        console.log ('Ocurrió un error');
      });

      return listaUsuarios;
    }

    function _setUserData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          cedula: data.cedula,
          foto: data.foto,
          primerNombre: data.primerNombre,
          segundoNombre: data.segundoNombre,
          primerApellido: data.primerApellido,
          segundoApellido: data.segundoApellido,
          correo: data.correo,
          telefono: data.telefono,
          fechaNacimiento: data.fechaNacimiento,
          provincia: data.provincia,
          canton: data.canton,
          distrito: data.distrito,
          direccionExacta: data.direccionExacta,
          tipo: data.tipo,
          listaPaquetes: data.listaPaquetes,
          sucursalAsignada: data.sucursalAsignada,
          puesto: data.puesto,
          vehiculo: data.vehiculo,
          listaLicencias: data.listaLicencias,
          estado: data.estado,
          listaTarjetas: data.listaTarjetas,
          listaPaquetespaquetes: data.listaPaquetespaquetes,
          contrasenna: data.contrasenna,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _updateUserData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/update_user',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          'cedula': data.cedula,
          'primerNombre': data.primerNombre,
          'segundoNombre': data.segundoNombre,
          'primerApellido': data.primerApellido,
          'segundoApellido': data.segundoApellido,
          'correo': data.correo,
          'telefono': data.telefono,
          'fechaNacimiento': data.fechaNacimiento,
          'provincia': data.provincia,
          'canton': data.canton,
          'distrito': data.distrito,
          'direccionExacta': data.direccionExacta,
          'tipo': data.tipo,
          'listaPaquetes': data.listaPaquetes,
          'sucursalAsignada': data.sucursalAsignada,
          'puesto': data.puesto,
          'vehiculo': data.vehiculo,
          'listaLicencias': data.listaLicencias,
          'estado': data.estado,
          'listaTarjetas': data.listaTarjetas,
          'listaPaquetesConvenios': data.listaPaquetesConvenios,
          'contrasenna': data.contrasenna,
        }
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _buscarUsuarioPorId (pid) {
      let usuario = [];
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/buscar_user_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id: pid,
        },
      });

      peticion.done (function (response) {
        usuario = response;
      });

      peticion.fail (function () {});

      return usuario;
    }

    //
    //Final usuarios
    //

    //
    //Inicio Entidades
    //

    function _setEntidadData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_entidad',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          nombre: data.nombre,
          cedulaJuridica: data.cedulaJuridica,
          convenios: data.convenios,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _getEntidadesData () {
      let listaEntidades = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_entidades',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (entidades => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (entidades);
        listaEntidades = entidades;
      });
      peticion.fail (() => {
        listaEntidades = [];
        console.log ('Ocurrió un error');
      });

      return listaEntidades;
    }

    function _buscarEntidadPorId (pid) {
      let entidad = [];
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/buscar_entidad_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id: pid,
        },
      });

      peticion.done (function (response) {
        entidad = response;
      });

      peticion.fail (function () {});

      return entidad;
    }

    function _agregarConvenio (pId, pConvenio) {
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/agregar_convenio',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          _id: pId,
          tipoTramite: pConvenio.tipoTramite,
        },
      });

      peticion.done (function (response) {});

      peticion.fail (function () {});
    }

    //
    //Final Entidades
    //

    //
    //Inicio Convenios
    //

    function _getConveniosData () {
      let listaConvenios = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_convenios',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (convenios => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (convenios);
        listaConvenios = convenios;
      });
      peticion.fail (() => {
        listaConvenios = [];
        console.log ('Ocurrió un error');
      });

      return listaConvenios;
    }

    function _setConvenioData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_convenio',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          nombreEntidad: data.nombreEntidad,
          tipoTramite: data.tipoTramite,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

     //
    //Final Convenios
    //

    //
    //Inicio envio correo
    //
    function _sendMail (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/mail',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          correo: data.correo,
          contrasenna: data.contrasenna,
        },
      });

      peticion.done (datos => {
        response = datos.success;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    //
    //Final envio correo
    //

    //
    //Inicio Autenticación
    //

    /**
     * Función que almacena las credenciales dentro del session Storage
     * @param {Credenciales} value 
     */
    function _setSession (value) {
      let response = true;
      sessionStorage.setItem ('session', JSON.stringify (value));
      return response;
    }

    /**
     * Función que elimina los datos de la sesión activa
     */
    function _closeSession () {
      let response = true;
      sessionStorage.removeItem ('session');
      return response;
    }

    /**
     * Función que retorna los datos almacenados dentro del sessionStorage
     */
    function _getSession () {
      let sessionActive = JSON.parse (sessionStorage.getItem ('session'));

      return sessionActive;
    }

    //
    //Final Autenticación
    //

    function _getArticuloData () {
      let listaArticulos = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_articulos',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (articulos => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (articulos);
        listaArticulos = articulos;
      });
      peticion.fail (() => {
        listaArticulos = [];
        console.log ('Ocurrió un error');
      });

      return listaArticulos;
    }

    function _setArticuloData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_articulo',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id: data.id,
          producto: data.producto,
          impuesto: data.impuesto,
          estado: data.estado,
        },
      });
    }

    // Inicio de tarjetas

    function _getTarjetasData () {
      let listaTarjetas = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_tarjetas',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (tarjetas => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (tarjetas);
        listaTarjetas = tarjetas;
      });
      peticion.fail (() => {
        listaTarjetas = [];
        console.log ('Ocurrió un error');
      });

      return listaTarjetas;
    }

    function _setTarjetasData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_tarjetas',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id: data.id,
          nombre: data.nombre,
          numero: data.numero,
          expiracion: data.expiracion,
          cvv: data.cvv,
          estado: data.estado,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _agregarTarjetaUsuario (pId, pTarjeta) {
      console.log ('pid', pId);
      console.log ('pTarjeta', pTarjeta);

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/agregar_tarjeta_usuario',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          _id: pId,
          tarjetaID: pTarjeta.id,
        },
      });

      peticion.done (function (response) {});

      peticion.fail (function () {});
    }

    // Fin Tarjetas

    //
    /*Inicio paquetes de convenio*/
    //

    function _setPaqueteConvenioData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_paquete_convenio',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          tracking: data.tracking,
          cliente: data.cliente,
          convenio: data.convenio,
          fecha: data.fecha,
          estadoTraslado: data.estadoTraslado,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _getPaquetesConvenioData () {
      let listaPaquetesConvenio = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_paquetes_convenio',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (paquetesConvenio => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (paquetesConvenio);
        listaPaquetesConvenio = paquetesConvenio;
      });
      peticion.fail (() => {
        listaPaquetesConvenio = [];
        console.log ('Ocurrió un error');
      });

      return listaPaquetesConvenio;
    }

    function _agregarPaqueteConvenio (pId, pPaqueteConvenio) {
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/agregar_paquete_convenio',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          _id: pId,
          tracking: pPaqueteConvenio.tracking,
        },
      });

      peticion.done (function (response) {});

      peticion.fail (function () {});
    }

    //
    /*Final Paquetes de convenio*/
    //

    //
    /* inicio Paquetes*/
    //

    function _setPaqueteData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_paquete',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          usuario: data.usuario,
          tracking: data.tracking,
          distribuidor: data.distribuidor,
          precio: data.precio,
          peso: data.peso,
          kilometro: data.kilometro,
          tipoArticulo: data.tipoArticulo,
          descripcion: data.descripcion,
          sucursal: data.sucursal,
          repartidor: data.repartidor,
          estado: data.estado,
          estadoTraslado: data.estadoTraslado,
          listaEstados: data.listaEstados,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _updatePaqueteData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/update_paquete',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          usuario: data.usuario,
          tracking: data.tracking,
          distribuidor: data.distribuidor,
          precio: data.precio,
          peso: data.peso,
          kilometro: data.kilometro,
          tipoArticulo: data.tipoArticulo,
          descripcion: data.descripcion,
          sucursal: data.sucursal,
          repartidor: data.repartidor,
          estado: data.estado,
          estadoTraslado: data.estadoTraslado,
          listaEstados: data.listaEstados,
        },
      });

      peticion.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }


    function _getPaquetesData () {
      let listaPaquetes = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_paquetes',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (paquetes => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (paquetes);
        listaPaquetes = paquetes;
      });
      peticion.fail (() => {
        listaPaquetes = [];
        console.log ('Ocurrió un error');
      });

      return listaPaquetes;
    }

    function _agregarPaquete (pId, pPaquete) {
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/agregar_paquete',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          _id: pId,
          tracking: pPaquete.tracking,
        },
      });

      peticion.done (function (response) {});

      peticion.fail (function () {});
    }

    //
    /*Final Paquetes*/
    //
    //
    /* inicio Estados*/
    //

    function _setEstadoData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_estado',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          usuario: data.usuario,
          fecha: data.fecha,
          hora: data.hora,
          estado: data.estado,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }

    function _getEstadoData () {
      let listaEstados = [];

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/get_all_estados',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      peticion.done (estados => {
        console.log ('Datos que vienen desde la base de datos');
        console.log (estados);
        listaEstados = estados;
      });
      peticion.fail (() => {
        listaEstados = [];
        console.log ('Ocurrió un error');
      });

      return listaEstados;
    }

    function _agregarEstado (pId, pEstado) {
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/agregar_estado',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          _id: pId,
          estado: pEstado.estado,
        },
      });

      peticion.done (function (response) {});

      peticion.fail (function () {});
    }

    function _buscarPaquetePorId (pid) {
      let paquete = [];
      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/buscar_paquete_id',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          id: pid,
        },
      });

      peticion.done (function (response) {
        paquete = response;
      });

      peticion.fail (function () {});

      return paquete;
    }

    //
    /*Final Estados*/
    //
  }

  function _getSucursalesData() {
    let listaSucursales = [];

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/get_all_sucursales',
      type: 'get',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {}
    });
    peticion.done((sucursales) => {
      console.log('Datos que vienen desde la base de datos')
      console.log(sucursales);
      listaSucursales = sucursales;
    });
    peticion.fail(() => {
      listaSucursales = [];
      console.log('Ocurrió un error');
    });

    return listaSucursales;
  }

  function _setSucursalesData(data) {
    let response;

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/save_sucursal',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        id: data.id,
        nombre: data.nombre,
        provincia: data.provincia,
        canton: data.canton,
        distrito: data.distrito,
        telefono: data.telefono,
        horario: data.horario,
        latitud: data.latitud,
        longitud: data.longitud,
        estado: data.estado,
        
      },
    });

    peticion.done((datos) => {
      response = datos.msj;
      console.log('Petición realizada con éxito');
    });
    peticion.fail((error) => {
      response = error;
      console.log('Ocurrió un error');
    });

    return response;
  }

  function _updateSucursalesData(data) {
    let response;

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/update_sucursales',
      type: 'put',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        id: data.id,
        nombre: data.nombre,
        provincia: data.provincia,
        canton: data.canton,
        distrito: data.distrito,
        telefono: data.telefono,
        horario: data.horario,
        latitud: data.latitud,
        longitud: data.longitud,
        estado: data.estado,
      }
    });

    peticion.done((datos) => {
      response = datos.msj;
      console.log('Petición realizada con éxito');
    });
    peticion.fail((error) => {
      response = error;
      console.log('Ocurrió un error');
    });

    return response;
  }

  function _buscarSucursalPorId(pid) {
    let sucursal = [];
    let peticion = $.ajax({
      url: 'http://localhost:4000/api/buscar_sucursal_id',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        'id': pid
      }
    });

    peticion.done(function (response) {
      sucursal = response;
    });

    peticion.fail(function () {

    });

    return sucursal;
  }

  function _setLicenciaData (data) {
    let response;

    let peticion = $.ajax ({
      url: 'http://localhost:4000/api/save_licencias',
      type: 'post',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        numLicencia : data.numLicencia,
        tipoLicencia: data.tipoLicencia,
        vencimiento : data.vencimiento,
      },
    });

    peticion.done (datos => {
      response = datos.msj;
      console.log ('Petición realizada con éxito');
    });
    peticion.fail (error => {
      response = error;
      console.log ('Ocurrió un error');
    });

    return response;
  }

  function _updateTarjetasData(data) {
    let response;

    let peticion = $.ajax({
      url: 'http://localhost:4000/api/update_tarjetas',
      type: 'put',
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      dataType: 'json',
      async: false,
      data: {
        id: data.id,
        nombre: data.nombre,
        numero: data.numero,
        expiracion: data.expiracion,
        cvv: data.cvv,
        estado: data.estado,
      }
    });

    peticion.done((datos) => {
      response = datos.msj;
      console.log('Petición realizada con éxito');
    });
    peticion.fail((error) => {
      response = error;
      console.log('Ocurrió un error');
    });

    return response;
  }
  
}) ();
