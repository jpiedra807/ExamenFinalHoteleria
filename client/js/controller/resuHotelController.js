app.controller("resuHotelController",function(filterService,$http,orderService)
{
    //Menus.
    this.menus    = {
                        options     : false,
                        filterPanel : false
                    };

    //Request.
    this.search    = {
                        iata     : 'mad',
                        checkin  : '2017-07-01',
                        checkout : '2017-07-12',
                        rooms    : '2-0'
                     };

    //Estructura de campos del panel de formulario.
    this.controles = {
                        nombre : {
                                    texto   : '',
                                    visible : true
                                 },
                        precio : {
                                    rango   : [0, 0],
                                    min     : 0,
                                    max     : 0,
                                    visible : true
                                 },
                        estrellas : {
                                        flags :{
                                                    cinco:false,
                                                    cincoCont:0,
                                                    cuatro:false,
                                                    cuatroCont:0,
                                                    tres:false,
                                                    tresCont:0,
                                                    dos:false,
                                                    dosCont:0,
                                                    uno:false,
                                                    unoCont:0,
                                                    todas:true,
                                                    todasCont:0
                                                },
                                        visible : true
                                    }
                    };

    //Variable en donde almaceno el resultado del filtrado.
    this.hoteles = null;

    //Almaceno el resultado de la busqueda al api.
    this.response = null;

    //Loader.
    this.loader  = false;

    //Ordenamiento.
    this.orden   = 'desc';                                    

    //Usado para complementar en la busqueda.
    this.range = function(count)
    {
        var ratings = []; 

        for (var i = 0; i < count; i++) 
            ratings.push(i);

        return ratings;
    }

    //Ocultar menu mobile burger.
    this.mostrarOptions =()=>{
        this.menus.options = !(this.menus.options);
    };

    //Ocultar menu mobile filter.
    this.mostrarFilter =()=>{
        this.menus.filterPanel = !(this.menus.filterPanel);
        console.log('a');
    };    

    //Oculta o muestra el cuadro de filtro por nombre.
    this.mostrarNombre = ()=>{
        this.controles.nombre.visible = !this.controles.nombre.visible;
    };

    //Oculta o muestra el cuadro de filtro por precio.
    this.mostrarPrecio = ()=>{
        this.controles.precio.visible = !this.controles.precio.visible;
    }; 

    //Oculta o muestra el cuadro de filtro por estrellas.
    this.mostrarEstrellas = ()=>{
        this.controles.estrellas.visible = !this.controles.estrellas.visible;
    };

    //Busco los precios maximos y  minimos en base a los resultados.
    this.setMaxMin = (hoteles)=>{

        let min = 100000;
        let max = 0;

        //Recorro comparando.
        hoteles.forEach((hotel)=>{
            if (min>parseFloat(hotel.price))
                min = parseFloat(hotel.price);

            if (max<parseFloat(hotel.price))
                max = parseFloat(hotel.price);
        });

        //Seteo los precios.
        this.controles.precio.rango = [0,max];
        this.controles.precio.min   = min;
        this.controles.precio.max   = max;
    };

    //Armo la url para hacer el request.
    this.getUrlApi = ()=>
    {
        return 'http://127.0.0.1:5000/search/'+this.search.iata+'/'+this.search.checkin+'/'+this.search.checkout+'/'+this.search.rooms;        
    }

    //Hago el request para obtener los datos.
    this.requestJson = ()=>{

        //Traigo la url para hacer el request.
        urlApi      = this.getUrlApi();

        //Muestro el loader.
        this.loader = true;

        //Hago el request por ajax para obtener los datos.
        $http({method:"GET",url:urlApi})
        .then((response)=>{               

                //Recorro todos los datos para traer los max y min.
                this.setMaxMin(response.data.hotels);

                //Guardo resultados de la consulta.
                this.response = response.data.hotels;

                //Filtro y ordeno los resultados.
                this.hoteles = this.ordenar(this.filtrar(response.data.hotels));

                //Oculto el loader.
                this.loader  = false;
        },()=>{
            console.log('error');
        });
    };

    //Este metodo llama al servicio de filtrado.
    this.filtrar = (datos)=>
    {        
        //Filtro usando el servicio.
        return filterService.filtrar(datos,this.controles);
    };

    //Este metodo llama al servicio de ordenamiento.
    this.ordenar = (datos)=>
    {
        //Cuento la cantidad de estrellas del lote total.
        this.starCount(datos);

        return orderService.ordenar(datos,this.orden);
    };

    //Cuenta la cantidad de estrellas en total.
    this.starCount = (datos)=>
    {
        let cinco  = 0;
        let cuatro = 0;
        let tres   = 0;
        let dos    = 0;
        let una    = 0;

        datos.forEach((x)=>{

            if (x.stars==5)
                    cinco++;

            if (x.stars==4)
                    cuatro++;

            if (x.stars==3)
                    tres++;

            if (x.stars==2)
                    dos++;

            if (x.stars==1)                
                    una++;
        });

        this.controles.estrellas.flags.cincoCont    = cinco;
        this.controles.estrellas.flags.cuatroCont   = cuatro;
        this.controles.estrellas.flags.tresCont     = tres;
        this.controles.estrellas.flags.dosCont      = dos;
        this.controles.estrellas.flags.unoCont      = una;
        this.controles.estrellas.flags.todasCont    = cinco+cuatro+tres+dos+una;
    };

    //Aplico filtros y reasigno a la variable que bindean los resultados.
    this.aplicarFiltros = ()=>
    {
        //Filtro y ordeno los resultados.
        this.hoteles = this.ordenar(this.filtrar(this.response));
    };

    this.requestJson();
});