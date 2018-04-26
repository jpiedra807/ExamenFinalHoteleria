(() => {
    'use strict';
    angular
        .module('correos')
        .service('servicioUsuarios', servicioUsuarios)

    servicioUsuarios.$inject = ['$log', '$http', 'dataStorageFactory'];

    function servicioUsuarios($log, $http, dataStorageFactory) {

        const asyncLocalStorage = {
            setItem: function (key, value) {
                return Promise.resolve().then(() => {
                    let response = true;
                    localStorage.setItem(key, JSON.stringify(value));
                    return response
                });
            }
        };

        let publicAPI = {
            addUsuario: _addUsuario,
            getUsuarios: _getUsuarios,
            actualizarUsuario: _actualizarUsuario,
            addPaquete: _addPaquete,
            getPaquete: _getPaquete,
            actualizarPaquete: _actualizarPaquete,
            actualizarEstadoPaquete: _actualizarEstadoPaquete,
            actualizarRepartidor: _actualizarRepartidor,
            // actualizarLicencias: _actualizarLicencias,
            addTarjeta: _addTarjeta,
            getTarjeta: _getTarjeta,
            getRol: _getRol,
            getRolSucursal: _getRolSucursal,
            getRolNombre: _getRolNombre,
            getAllPaquetes: _getAllPaquetes,
            actualizarTarjeta: _actualizarTarjeta,
            addPaqueteConvenio:_addPaqueteConvenio,
            getPaquetesConvenio:_getPaquetesConvenio,
            getUsuarioActivo:_getUsuarioActivo,
            solicitarEnvioPaqueteConvenio:_solicitarEnvioPaqueteConvenio,
            getAllPaquetesConvenio:_getAllPaquetesConvenio,
            addEstado:_addEstado,
            agregarEstado:_agregarEstado,
            getTarjetaID: _getTarjetaID
           
            }
        return publicAPI
        
        function _addUsuario(pNuevoUsuario) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setUserData(pNuevoUsuario);
            dataStorageFactory.sendMail(pNuevoUsuario);

            return registroExitoso;
        }

        function _getUsuarios() {
            let listaUsuarios = [];
            let listaUsuariosBD = dataStorageFactory.getUsersData();
            listaUsuariosBD.forEach(objUsuario => {
                console.log('objUsuario',objUsuario.listaPaquetes);
                    let objUsuarioTemp = new Usuario(objUsuario.cedula, objUsuario.foto, objUsuario.primerNombre, objUsuario.segundoNombre, objUsuario.primerApellido, objUsuario.segundoApellido, objUsuario.correo, objUsuario.telefono, objUsuario.fechaNacimiento, objUsuario.provincia, objUsuario.canton, objUsuario.distrito, objUsuario.direccionExacta, objUsuario.contrasenna,objUsuario.tipo, objUsuario.sucursalAsignada, objUsuario.puesto, objUsuario.vehiculo, []);
                    objUsuarioTemp.cambiarEstado(objUsuario.estado);
                    objUsuarioTemp.setId(objUsuario._id),
                    objUsuarioTemp.listaTarjetas = objUsuario.listaTarjetas;

                    objUsuario.listaLicencias.forEach(objLicencia => {

                        let objLicenciaTemp = new Licencia(objLicencia.numLicencia, objLicencia.tipoLicencia, objLicencia.vencimiento);
                        objUsuarioTemp.listaLicencias.push(objLicenciaTemp);
                    });




                    // objUsuario.listaPaquetes.forEach(objPaquete => {
                    //     let objPaqueteTemp = new Paquete(objPaquete.usuario, objPaquete.tracking, objPaquete.distribuidor, objPaquete.precio,objPaquete.peso, objPaquete.Kilometro,objPaquete.tipoArticulo, objPaquete.descripcion, objPaquete.sucursal, objPaquete.repartidor);

                    //     let listaEstados = objPaquete.listaEstados;

                    //     // objTarjetaTemp.cambiarEstadoDeActividadTarjeta(objTarjeta.estado);

                    //     listaEstados.forEach(objEstado => {
                    //         let fecha = new Date(objEstado.fecha);
                    //         let hora = fecha;
                    //         let estadoTemp = new Estado(objEstado.usuario, fecha, hora, objEstado.estado);

                    //         objPaqueteTemp.addEstado(estadoTemp);
                            
                    //     });
                    //     objPaqueteTemp.cambiarEstadoDeActividad(objPaquete.estado);
                    //     objPaqueteTemp.mostrarEstadoTraslado(objPaquete.estadoTraslado);

                    //     objUsuarioTemp.agregarPaquete(objPaqueteTemp);
                    // });
                    
                    listaUsuarios.push(objUsuarioTemp);
                });

                console.log('Datos de la BD convertidos en clases');
                console.log('Lista de usuarios ', listaUsuarios);
            return listaUsuarios;
        };



        //
        //Inicio paquetes convenio
        //
        function _addPaqueteConvenio(pNuevoPaquete) {
            let listaUsuarios = _getUsuarios();
            let registroExitoso = false;
            let usuario = {};
            for (let i = 0; i < listaUsuarios.length; i++) {
              if (listaUsuarios[i].correo == pNuevoPaquete.cliente) {
                usuario = dataStorageFactory.buscarUsuarioPorId(listaUsuarios[i]._id);
              }
            }
      
            registroExitoso = dataStorageFactory.setPaqueteConvenioData(pNuevoPaquete);
            
            dataStorageFactory.agregarPaqueteConvenio(usuario._id, pNuevoPaquete);
        
            
            return registroExitoso;
          };



        function _getPaquetesConvenio() {
            let listaPaquetesConvenios = [];
            let listaPaquetesConveniosBD = dataStorageFactory.getPaquetesConvenioData();
            listaPaquetesConveniosBD.forEach(objPaqueteConvenio => {
              let objPaqueteConvenioTemp = new PaqueteConv(objPaqueteConvenio.tracking, objPaqueteConvenio.cliente, objPaqueteConvenio.convenio,objPaqueteConvenio.fecha, objPaqueteConvenio.estadoTraslado);

      
              listaPaquetesConvenios.push(objPaqueteConvenioTemp);
      
            });
      
            return listaPaquetesConvenios;
      
          };


        function _getAllPaquetesConvenio() {
            let listaUsuarios = _getUsuarios();
            let listaPaquetesConvenios = [];
            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].listaPaquetesConvenios != null) {
                    for (let j = 0; j < listaUsuarios[i].listaPaquetesConvenios.length; j++) {
                        listaPaquetesConvenios.push(listaUsuarios[i].listaPaquetesConvenios[j]);
                        
                    }
                }
            }
            return listaPaquetesConvenios;
        };

        function _solicitarEnvioPaqueteConvenio(pPaquete) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let usuario = {};
            for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].correo = sesion.correo) {
                    for (let j = 0; j < listaUsuarios[i].listaPaquetesConvenios.length; j++) {
                        if (listaUsuarios[i].listaPaquetesConvenios[j].tracking == pPaquete.tracking) {
                            listaUsuarios[i].listaPaquetesConvenios[j].cambiarEstadoTraslado('En proceso de envío');
                            usuario = listaUsuarios[i];
                        }
                    }

                }
            }
            _actualizarUsuario(usuario);
        }


        //
        //Final paquetes convenio
        //


        function _actualizarUsuario(pUsuario) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updateUserData(pUsuario);
      
            return modificacionExitosa;
          }

        //    function encontrarTraking(pNuevoPaquete) {
        //        let listaUsuarios = _getUsuarios ();
        //        let trackingEncontrado;

        //        for (let i = 0; i < listaUsuarios.length; i++) {
        //            let listaPaquetes = listaUsuarios[i].listaPaquetes;
        //            for (let j = 0; j < listaPaquetes.length; j++) {
        //                if (listaPaquetes[j].tracking == pNuevoPaquete.tracking) {
        //                    trackingEncontrado = listaPaquetes[j].tracking;
        //                }
        //            }
        //        }
        //        return trackingEncontrado;
        //    };

           function _addPaquete (pNuevoPaquete) {

                let listaUsuarios = _getUsuarios();
                let registroExitoso = false;
                let usuario = {};
                for (let i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i].correo == pNuevoPaquete.usuario) {
                    usuario = dataStorageFactory.buscarUsuarioPorId(listaUsuarios[i]._id);
                }

                registroExitoso = true;

                }
        
                dataStorageFactory.setPaqueteData (pNuevoPaquete);
                
                dataStorageFactory.agregarPaquete(usuario._id, pNuevoPaquete);
            
                
                return registroExitoso;
            };
                
            //     let listaUsuarios = _getUsuarios();
            //     let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            //     let respuesta = true;

            //     for(let i = 0; i < listaUsuarios.length; i++){
            //         if (sesion.nombre == listaUsuarios[i].primerNombre){
            //         listaUsuarios[i].agregarPaquete(pNuevoPaquete);
            //         }
            //     }

            //     actualizarLocal(listaUsuarios);
            //     return respuesta;
                
            // };


        function _getPaquete() {

           let listaPaquetes = [];
            let listaPaquetesBD = dataStorageFactory.getPaquetesData();
            listaPaquetesBD.forEach(objPaquete => {
              let objPaqueteTemp = new Paquete(objPaquete.usuario, objPaquete.tracking, objPaquete.distribuidor, objPaquete.precio,objPaquete.peso, objPaquete.Kilometro,objPaquete.tipoArticulo, objPaquete.descripcion, objPaquete.sucursal, objPaquete.repartidor);
              objPaqueteTemp.mostrarEstadoTraslado(objPaquete.estadoTraslado);
            
              objPaqueteTemp.setId(objPaquete._id);

              
              listaPaquetes.push(objPaqueteTemp);
      
            });
      
            return listaPaquetes;


            // let ListaUsuarios = _getUsuarios();
            // let listaPaquetes = [];
            // let session = JSON.parse (sessionStorage.getItem ('sesion'));

            // for (let i = 0; i < ListaUsuarios.length; i++) {
            //     if (session.nombre == ListaUsuarios[i].primerNombre ) {
            //         if (ListaUsuarios[i].listaPaquetes != null) {
            //            listaPaquetes =  ListaUsuarios[i].listaPaquetes;
            //         }
            //     }
                
            // }
            
            // return listaPaquetes;
        };
    
        function _getAllPaquetes(){
        let listaUsuarios = _getUsuarios();
        let listaPaquetes = [];
        for (let i = 0; i < listaUsuarios.length; i++){
            let listaPaquetesTemp = listaUsuarios[i].listaPaquetes;
            if(listaPaquetesTemp != []){
            let paqueteTemp = {};
            for(let j = 0; j < listaPaquetesTemp.length; j++){
                paqueteTemp = listaPaquetesTemp[j];
                listaPaquetes.push(paqueteTemp);
            }
            }
        }
        return listaPaquetes;
        }


        function _actualizarPaquete(pPaquete) {
            let modificacionExitosa = false;
      
            modificacionExitosa = dataStorageFactory.updatePaqueteData(pPaquete);
      
            return modificacionExitosa;
          }



        function _actualizarEstadoPaquete(pObjpaquete) {
            let listaUsuarios = _getUsuarios();
            
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].primerNombre == pObjpaquete.usuario){
                    for (let j = 0; j < listaUsuarios[i].listaPaquetes.length; j++) {
                        if (listaUsuarios[i].listaPaquetes[j].tracking == pObjpaquete.tracking) {
                            listaUsuarios[i].listaPaquetes[j] = pObjpaquete;
                        }
                    }
                }
            }
            actualizarLocal(listaUsuarios);

        };


        function actualizarLocal(plistaActualizada) {
            localStorage.setItem('usuariosLS', JSON.stringify(plistaActualizada));
        };
        function actualizarPaqueteLocal(plistaPaqueteActualizada){
            localStorage.setItem('paquetesLS', JSON.stringify(plistaPaqueteActualizada));
        };
        function actualizarTarjetaLocal(pListaTarjetaActualizada){
            localStorage.setItem('tarjetasLS', JSON.stringify(pListaTarjetaActualizada));
        };
        

            function _getLicencia() {
                let listaLicencia = [];
                // let listaLicenciaLocal = JSON.parse(localStorage.getItem('licenciasLS'));
                registroExitoso = dataStorageFactory.setUserData(pNuevoUsuario);
    
                if(listaLicenciaLocal == null){
                   listaLicencia = [];
     
                }else{
                    listaLicenciaLocal.forEach(objLicencia => {
                        let objLicenciaTemp = new Licencia(objLicencia.numLicencia, objLicencia.tipoLicencia, objLicencia.pVencimientoLicencia );
    
                        listaLicencia.push(objLicenciaTemp);
                    });
                }
                return listaLicencia;
            };
    
            function _actualizarLicencia(pObjlicencia) {
                let listaLicencia = _getLicencia();
    
                for (let i = 0; i < listaLicencia.length; i++) {
                    if (listaLicencia[i].traking == pObjlicencia.traking ) {
                       
                        listaLicencia[i] = pObjlicencia;
                    }
                }
                actualizarLicenciaLocal (listaLicencia);
            };

        function _getRol() {
            let session = JSON.parse(sessionStorage.getItem('sesion'));
            let rol = session.tipo;
            return rol;
        }

        function _getRolSucursal() {
            let session = JSON.parse(sessionStorage.getItem ('sesion'));
            let rol = session.sucursalAsignada;
            return rol;
        }
        
        function _getRolNombre() {
            let session = JSON.parse(sessionStorage.getItem ('sesion'));
            let rol = session.nombre;
            return rol;
        }
        

        function _getUsuarioActivo(){
            let listaUsuarios= _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let usuarioActivo = '';
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(sesion.correo == listaUsuarios[i].correo){
                    usuarioActivo = listaUsuarios[i].primerNombre +' '+ listaUsuarios[i].segundoNombre +' ' + listaUsuarios[i].primerApellido+' '; 
                }   
                
            }
            return usuarioActivo;
        }
        

        function _getTarjetaID(pId) {


            let tarjetaID = dataStorageFactory.buscarTarjetaId(pId);

            return tarjetaID;
        };
        
        function _addTarjeta(pNuevaTarjeta) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            let tarjetaRepetida = false;
            let registroValido = false;
            let usuario = {};
            let listaTarjetas = _getTarjeta();

            for (let i = 0; i < listaTarjetas.length; i++) {
                if (listaTarjetas[i].numero == pNuevaTarjeta.numero) {
                    tarjetaRepetida = true;
                }
            }

            if (tarjetaRepetida == false) {
                for (let i = 0; i < listaUsuarios.length; i++) {
                    if (sesion.correo == listaUsuarios[i].correo) {
                        usuario = dataStorageFactory.buscarUsuarioPorId(listaUsuarios[i]._id);
                    }
                }
                registroValido = dataStorageFactory.setTarjetasData(pNuevaTarjeta);

                dataStorageFactory.agregarTarjetaUsuario(usuario._id, pNuevaTarjeta)
            } else {
                registroValido = false;
            }

            return registroValido;
            
      };



        function _getTarjeta(){
            let listaTarjetas = [];
            let listaTarjetasBD = dataStorageFactory.getTarjetasData();
            listaTarjetasBD.forEach(objTarjetas => {
              let objTarjetasTemp = new Tarjeta(objTarjetas.id, objTarjetas.nombre, objTarjetas.numero, objTarjetas.expiracion, objTarjetas.cvv, objTarjetas.estado);
      
              listaTarjetas.push(objTarjetasTemp);
      
            });
      
            return listaTarjetas;
      
          };
            
           

        function _actualizarRepartidor(pObjRepartidor) {
            let listaUsuarios = _getUsuarios();
            let sesion = JSON.parse(sessionStorage.getItem('sesion'));
            for (let i = 0; i < listaUsuarios.length; i++) {
                if(listaUsuarios[i].correo == sesion.correo){
                    for (let j = 0; j < listaUsuarios[i].listaUsuarios.length; j++) {
                        if (listaUsuarios[i].listaUsuarios[j].tipo == '3') {
                            listaUsuarios[i].listaUsuarios[j] = licencias;
                        }
                    }
                }
            }
            actualizarLocal(listaUsuarios);

        }; 

        function _actualizarTarjeta(pObjTarjeta) {
            let modificacionExitosa = false;

            modificacionExitosa = dataStorageFactory.updateTarjetasData(pObjTarjeta)

            return modificacionExitosa;
            };
            
             function _addEstado(pEstado) {
            let registroExitoso = false;

            registroExitoso = dataStorageFactory.setEstadoData(pEstado);

            return registroExitoso;
        }

            function _agregarEstado(pEstado) {

                let listaPaquetes = _getPaquete();
                let registroExitoso = false;
                let paquete = {};
                for (let i = 0; i < listaPaquetes.length; i++) {
                if (listaPaquetes[i]._id == pEstado.usuario) {
                    paquete = dataStorageFactory.buscarPaquetePorId(listaPaquetes[i]._id);
                }
                }
        
                registroExitoso = dataStorageFactory.setEstadoData (pEstado);
                
                dataStorageFactory.agregarEstado(paquete._id, pEstado);
            
                
                return registroExitoso;
                
            }

        };


    
        
})();