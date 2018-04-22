/*
	Con estas tres clases implemento el patron strategy
	para encapsular los algoritmos de filtrado, bajo un mismo metodo.
*/

//Filtro la lista de resultados en base al nombre.
class FiltroNombre
{
	constructor(lista,filtros)
	{
		this.datos   = lista;
		this.filtros = filtros;
	}

	setDatos(datos)
	{
		this.datos = datos;
	}

	setFiltros(filtros)
	{
		this.filtros=filtros;
	}

	filtrar()
	{
		if (this.filtros.nombre.texto!='')
		{
			return this.datos.filter((x)=>{
				return (x.name.indexOf(this.filtros.nombre.texto)>=0);
			});
		}
		else
			return this.datos;
	}
}

//Filtro la lista de resultados defininendo un precio max y min.
class FiltroPrecio
{
	constructor(lista,filtros)
	{
		this.datos   = lista;
		this.filtros = filtros;
	}

	setDatos(datos)
	{
		this.datos = datos;
	}

	setFiltros(filtros)
	{
		this.filtros=filtros;
	}

	filtrar()
	{
		let minVal = this.filtros.precio.rango[0];
		let maxVal = this.filtros.precio.rango[1];

		return this.datos.filter((item)=>{
			return ((minVal<=item.price)&&(item.price<=maxVal));
		});
	}
}

//Filtro la lista en base a las estrellas seteadas.
class FiltroEstrellas
{
	constructor(lista,filtros)
	{
		this.datos   = lista;
		this.filtros = filtros;
	}

	setDatos(datos)
	{
		this.datos = datos;
	}

	setFiltros(filtros)
	{
		this.filtros=filtros;
	}

	//Vuelco los flag de estrellas a un array.
	makeArrayStars()
	{
		let stars = new Array();

		if (this.filtros.estrellas.flags.cinco) 
			stars.push('5');

		if (this.filtros.estrellas.flags.cuatro) 
			stars.push('4');

		if (this.filtros.estrellas.flags.tres) 
			stars.push('3');

		if (this.filtros.estrellas.flags.dos) 
			stars.push('2');

		if (this.filtros.estrellas.flags.uno) 
			stars.push('1');

		if (this.filtros.estrellas.flags.todas) 
		{
			stars.push('5');
			stars.push('4');
			stars.push('3');
			stars.push('2');
			stars.push('1');
		}

		return stars;
	}

	filtrar()
	{
		//Traigo un array con las estrellas que debo filrar.
		let starsArray = this.makeArrayStars();

		return this.datos.filter((item)=>{			
			return (starsArray.indexOf(item.stars.toString())>=0);
		});
	}
}