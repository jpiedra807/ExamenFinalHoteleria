/*
    En este servicio implemento un patron middleware, en complemento
    con el patron strategy para manejar las formas de filtrado.
*/
app.service('filterService', function()
{
    this.filtrar = function (datos,filtros)
    {
        //Cargo en un array las tres objetos con los algoritmos de filtrado.
        let filterArray = [
                                new FiltroNombre(null,filtros),
                                new FiltroPrecio(null,filtros),
                                new FiltroEstrellas(null,filtros)                                
                           ];

        //Itero usando las funciones para filtrar.
        let resu = datos;

        filterArray.forEach((filtro)=>{
            
            //Cargo los datos, para que luego sea sobreescrito.
            filtro.setDatos(resu);

            //Filtro y sobreescribo.
            resu = filtro.filtrar();
        });

        return resu;
    }    
});