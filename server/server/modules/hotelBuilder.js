//Importo el modelo de hotel.
let Hotel  	   = require('./hotel');

module.exports = class HotelBuilder
{
	//Construyo el hotel, tomo como base el nombre.
	buildHotel(hotelName)
	{
		//Armo el hotel, seteando los atributos.
		let hotel = new Hotel(hotelName,this.starsRandom(),this.codHotelRandom(),this.categRandom(),this.regimenRandom());

		hotel.setImages(this.imagesRandom());
		hotel.setServicios(this.serviceRandom());
		hotel.setDisponibilidad(this.availableRandom());
		hotel.setOferta(this.ofertaRandom());
		hotel.setRecomendado(this.valuableRandom());
		hotel.setPrice(this.priceRandom(hotel.stars));

		return hotel;
	}

	//Fijo el precio random, en base a la cantidad de estrellas.
	priceRandom(stars)
	{
		let base   = 1000;
		let taza   = Math.floor((Math.random()*base)+1);

		return (base*stars)+taza;
	}

	//Decido al azar si es recomendado o no.
	valuableRandom()
	{
		let esRecom = Math.floor(Math.random()*2);

		if (esRecom==1)
			return 'Recomendado';
		else
			return null;
	}

	//Decido al azar si el hotel tiene oferta o no.
	ofertaRandom()
	{
		let hayOferta = Math.floor(Math.random()*2);

		if (hayOferta==1)
			return Math.floor((Math.random()*20)+1)+'% OFF';
		else
			return null;
	}

	//Devuelvo una lista de codigos de servicios al azar.
	serviceRandom()
	{
		let services = ['neg','24h','cln','cof','bar','gym','pet','fod','bch','wifi','tv'];
		let max      = Math.floor((Math.random()*services.length));

		return services.slice(0,max);
	}

	//Devuelvo una lista de regimenes al azar.
	regimenRandom()
	{
		let foods    = ['Solo habitación','Desayuno','Desayuno americano','Almuerzo + desayuno','Pensión completa'];
		let ix       = Math.floor((Math.random()*foods.length));

		return foods[ix];
	}	

	//Obtengo un codigo de hotel al azar.
	codHotelRandom()
	{
		return Math.floor(Math.random()*2);
	}

	//Obtengo al azar si esta disponible o no.
	availableRandom()
	{
		return Boolean(Math.floor(Math.random()*2));
	}

	//Obtengo al azar una categoria del hotel.
	categRandom()
	{
		//Lista de categorias de hoteles.
		let categs = [
						'Tourist Class',
						'Moderate',
						'Superior First Class',
						'Deluxe Supreme',,
						'Tourist Class',
						'Superior First Class',
						'Moderate',
						'Bussines international',
						'Family Classic',
						'Normal'];

		//Escojo una al azar.
		let ix = Math.floor((Math.random()*categs.length));

		return categs[ix];
	}

	//Obtengo al azar estrells del 1 al 5.
	starsRandom()
	{
		return Math.floor((Math.random()*5)+1);
	}

	//Obtengo un bloque de 5 imagenes al azar en base a una lista.
	imagesRandom()
	{
		//Tengo un array con imagenes de dif hoteles.
		let imgs = [
						'http://image1.urlforimages.com/Images/1034972/_x200/184563594.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1375901149.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/714661832.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1191743196.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1630282221.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/799191970.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/915445378.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1797351073.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/487269053.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1372755426.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/371062846.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1231932878.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1070049967.jpg',
						'http://image1.urlforimages.com/Images/1034972/100x100/1011947932.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1011947932.jpg',
						'http://image1.urlforimages.com/Images/1034972/_x200/1587579332.JPG',
						'http://image1.urlforimages.com/Images/1034972/_x200/1593051524.JPG',
						'http://image1.urlforimages.com/Images/1034972/_x200/1946887706.JPG',
						'http://image1.urlforimages.com/Images/1034972/_x200/1228903418.JPG',				
						'http://image1.urlforimages.com/Images/12440/_x200/801266018.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/990303560.jpg',
						'http://image1.urlforimages.com/Images/1212071/100x100/1678977242.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/1678977242.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/29351303.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/308743722.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/1629698168.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/55907043.jpg',
						'http://image1.urlforimages.com/Images/1212071/_x200/988731623.jpg',
						'http://image1.urlforimages.com/Images/1211641/_x200/801266018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/8012660V18.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/8012660U18.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/K801266018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/80126V6018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/J801266018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/80C1266018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/80126601M8.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/801266F018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/801X266018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/801266V018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/80R1266018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/8V01266V018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/801266Q018.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/80126601A8.JPG',
						'http://image1.urlforimages.com/Images/1211641/_x200/801I266018.JPG'		
					];

		//Armo un conjunto de 5 imagenes al azar y las agrupo.
		let resu = [];

		for (let i = 1;i<=5;i++)
		{
		  let ix = Math.floor((Math.random()*imgs.length));
		  resu.push(imgs[ix]);
		}

		return resu;			
	}
}