module.exports = class Hotel
{
	constructor(nombre,estrellas,codhotel,categ,regimen){
		this.name      = nombre;
		this.codHotel  = codhotel;
		this.stars     = estrellas;
		this.categ     = categ;
		this.images    = [];
		this.services  = [];
		this.dispo     = false;
		this.oferta    = null;
		this.valuable  = null;
		this.boardbase = regimen;
		this.price     = 0;
	}

	setPrice(val){
		this.price = val;
	}

	setOferta(oferta){
		this.oferta = oferta;
	}

	setRecomendado(val){
		this.valuable = val;
	}

	setImages(imgsArray){
		this.images = imgsArray;
	}

	setRegimen(regimen){
		this.regimen = regimen;
	}

	setServicios(servicios){
		this.services = servicios;
	}

	setDisponibilidad(dispo)
	{
		this.dispo = dispo;
	}
}