class Usuario {
    constructor(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pContrasenna, pTipo, pSucursalAsignada, pPuesto, pVehiculo, pLicencia, pTarjeta) {
        this._id = 0;
        this.cedula = pCedula;
        this.foto = pFoto;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.correo = pEmail;
        this.telefono = pTelefono;
        this.fechaNacimiento = pfechaNacimiento;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccionExacta = pDireccionExacta;
        this.tipo = pTipo;
        this.listaPaquetes = [];
        this.sucursalAsignada = pSucursalAsignada;
        this.puesto = pPuesto;
        this.vehiculo = pVehiculo;
        this.listaLicencias = pLicencia || [];
        this.estado = 'activo';
        // this.paqueteAsignado = 
        this.listaTarjetas = pTarjeta || [];
        this.listaPaquetesConvenios = [];
        this.contrasenna = pContrasenna;
    }

    setId(pId){
        this._id= pId;
    }
    cambiarEstado(pEstado) {
        this.estado = pEstado;
    }

    registrarTarjeta(pTarjeta) {
        this.listaTarjetas.push(pTarjeta);
    }
    getListaPaquetes() {
        return this.listaPaquetes;
    }
    agregarPaquete(pPaquete) {
        this.listaPaquetes.push(pPaquete);
    }

    agregarLicencias(pnuevaLicencia) {
        this.listaLicencias.push(pnuevaLicencia);
    }

    getLicencias() {
        return this.listaLicencias
    }
    obtenerTarjeta() {
        return this.tarjeta;
    }
    agregarPaqueteConvenio(pPaqueteConvenio){
        this.listaPaquetesConvenios.push(pPaqueteConvenio);
    }
    obtenerNombreCompleto(){
        let nombreCompleto = this.primerNombre + ' ' + this.segundoNombre + ' ' + this.primerApellido + ' ';
        return nombreCompleto;
    }
    obtenerDatosProvCantDist(){
        let provCantDist = this.provincia + ', ' + this.canton + ', ' + this.distrito + ' ';
        return provCantDist;
    }
}


class Paquete{
    constructor(pUsuario,pNumeroTracking, pDistribuidor, pPrecio, pPeso,pKilometro, pTipoArticulo, pDescripcion, pSucursal, pRepartidor){
        this._id =0;
        this.usuario = pUsuario;
        this.tracking = pNumeroTracking;
        this.distribuidor = pDistribuidor;
        this.precio = pPrecio;
        this.peso = pPeso;
        this.kilometro = pKilometro;
        this.tipoArticulo = pTipoArticulo;
        this.descripcion = pDescripcion;
        this.sucursal = pSucursal;
        this.repartidor = pRepartidor;
        this.estado = 'activo';
        this.estadoTraslado = '';
        this.listaEstados = [];

    }
    
    setId(pId){
        this._id = pId;
    }
    cambiarEstadoDeActividad(pEstado) {
        this.estado = pEstado;
    }



    addEstado(pEstado) {
        this.listaEstados.push(pEstado);
    }

    getListaEstados() {
        return this.listaEstados;
    }


    mostrarEstadoTraslado(pEstado) {
        this.estadoTraslado = pEstado;
    }
}

class Estado {
    constructor(pUsuario, pFecha, pHora, pEstado) {
        this._id = 0;
        this.usuario = pUsuario;
        this.fecha = pFecha;
        this.hora = pHora;
        this.estado = pEstado;
    }

  setId(pId){
        this._id = pId;
    }
}

// class Encargado extends Usuario{
//     constructor(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo,pSucursalAsignada){
//         super(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo);
//         this.sucursalAsignada = pSucursalAsignada;
//     }
// }



class Entidad {
    constructor(pNombre, pCedulaJuridica) {
        this._id = 0;
        this.nombre = pNombre;
        this.cedulaJuridica = pCedulaJuridica;
        this.convenios = [];
    }

    registrarConvenio(pConvenio) {
        this.convenios.push(pConvenio);
    }
    setId(pId){
        this._id = pId;
    }
}

class Convenio {
    constructor(pNombreEntidad, pTipoTramite) {
        this.nombreEntidad = pNombreEntidad;
        this.tipoTramite = pTipoTramite;
    }
}


class Licencia {
    constructor(pNumLicencia, pTipoLicencia, pVencimientoLicencia) {
        this.numLicencia = pNumLicencia;
        this.tipoLicencia = pTipoLicencia;
        this.vencimiento = pVencimientoLicencia;
    }
}
class Sucursal {
    constructor(pId, pNombre, pProvincia, pCanton, pDistrito, pTelefono, pHorario, pLat, pLong, pEstado){
       this.id = pId;
       this.nombre = pNombre;
       this.provincia = pProvincia;
       this.canton = pCanton;
       this.distrito = pDistrito;
       this.telefono = pTelefono;
       this.horario = pHorario;
       this.latitud = pLat;
       this.longitud = pLong;
       this.estado = pEstado || 'activo';
  
    }

    cambiarEstadoDeActividadSucursal(pEstado){
        this.estado = pEstado;
    }
}

class Tarjeta {
    constructor(pId, pNombre, pNumero, pExpiracion, pCvv, pEstado){
       this.id = pId;
       this.nombre = pNombre;
       this.numero = pNumero;
       this.expiracion = pExpiracion;
       this.cvv = pCvv; 
       this.estado = pEstado || 'activo';
    }

    obtenerInfoTarjeta() {
        return this;
    }

    cambiarEstadoDeActividadTarjeta(pEstado) {
        this.estado = pEstado;
    }
    getID() {
        return this.id;
    }
}
class PaqueteConv{
    constructor(pTracking, pCliente, pConvenio, pFecha){
        this.tracking = pTracking;
        this.cliente = pCliente;
        this.convenio = pConvenio;
        this.fecha = pFecha;
        this.estadoTraslado = 'Recibido en sucursal';
    }

    cambiarEstadoTraslado(pEstado){
        this.estadoTraslado = pEstado;
    }
}
// class Repartidor extends Usuario{
//         constructor(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo,plistaPaquetes,pEstado,pSucursalAsignada,pLicencias){
//             super(pCedula, pFoto, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEmail, pTelefono, pfechaNacimiento, pProvincia, pCanton, pDistrito, pDireccionExacta, pTipo, pTipo,plistaPaquetes,pEstado);
//             this.sucursalAsignada = pSucursalAsignada;
//             this.listaLicencias = pLicencias;
//         }
//     }


class Articulo{
    constructor(pId, pProducto, pImpuesto){
        this.id = pId;
        this.producto = pProducto;
        this.impuesto = pImpuesto;
        this.estado = 'activo';
        
    }

     cambiarEstadoDeActividadArticulo(pEstado) {
        this.estado = pEstado;
    }
}