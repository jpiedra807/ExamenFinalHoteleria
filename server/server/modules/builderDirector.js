//Importo el modelo de hotel.
let hotelBuilder  = require('./hotelBuilder');

//Esta clase maneja el builder de hoteles, en base a una lista de nombres.
module.exports = class BuilderDirector
{
	constructor()
	{
		this.hotelNames = [
							'Ibis Madrid Valentin Beato',
							'Ganivet Hotel',
							'Alimara Hotel',
							'Novotel Madrid Puente de La Paz',
							'Urso Hotel & Spa',
							'Opera Hotel Madrid',
							'Isla De La Garena Hotel',
							'Fontecruz Toledo - Palacio Eugenia de Montijo',
							'Novotel Campo de las Naciones',
							'Infanta Mercedes Hotel',
							'Mirador de Chamartin',
							'Quatro Puerta Del Sol',
							'HRC Hotel',
							'Eurobuilding 2',
							'Ibero I',
							'Aquaria Negresco',
							'Hotel Avant Airport',
							'Hotel Boulevard Plaza',
							'Hotel Alfonso VI',
							'Hotel Sterling',
							'The Principal Madrid Hotel',
							'Hilton Madrid Airport',
							'Osuna Hotel',
							'Cigarral Domenico',
							'Hotel Dome',
							'H TOP Bcn City',
							'Gran Hotel Velazquez',
							'Espahotel Gran Via',
							'Puerta De Toledo Hotel',
							'Mercure Madrid Plaza De Espana',
							'Centrar Madrid Plaza',
							'Iberostar International',
							'Badajoz Classic Hotel',
							'Andalucia de Chamartin',
							'Puerta Del Sol Murcia Hotel',
							'Hilton Madrid',
							'Holiday Inn Madrid Hotel',
							'Sheraton Hotel',
							'Novotel Madrid I',
							'Novotel Madrid II',
							'Centrar Madrid Plaza II',
						 ];
	}

	//Recorro la lista de hoteles y genero hoteles con datos al azar.
	buildHotelList()
	{
		let resuList = new Array();

		//Invoco al builder para que me genere un hotel para cada nombre.
		this.hotelNames.forEach((name)=>
		{			
			let hotelCons  = new hotelBuilder();
			let dummyHotel = hotelCons.buildHotel(name);

			//Para agregarlo como resultado, el hotel debe tener disponibilidad para reservar.
			if (dummyHotel.dispo)
				resuList.push(dummyHotel);
		});

		return resuList;
	}
}