app.service('orderService', function()
{
    this.ordenar = function (datos,orden)
    {
        datos.forEach((x)=>{
            x.price = Math.round(parseFloat(x.price));
        });

        if (orden=='val')
            return this.relevantes(datos);

       if (orden=='asc')
            return this.ascendiente(datos);

        if (orden=='desc')
            return this.descendiente(datos);
    }

    //Filtro solo los que tienen una oferta o son recomendados.
    this.relevantes=(datos)=>{
        return datos.filter((hotel)=>{
            return ((hotel.valuable=='Recomendado')||(hotel.oferta!=''));
        });
    }

    //Ordeno en forma descendiente el array en base al precio de cada hotel.
    this.descendiente=(datos)=>{        
        let resu= this.ascendiente(datos);
        return resu.reverse();
    }

    //Orden en forma ascendiente el array en base al precio de cada hotel.
    this.ascendiente = (datos)=>{
        return datos.sort((a, b)=>{
            return (a.price-b.price);
        });
    }    
});