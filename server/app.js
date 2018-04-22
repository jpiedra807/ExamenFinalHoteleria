const http   	 = require('http');
const express 	 = require('express');
const bodyParser = require('body-parser');

const app 	 	 = express();
const server 	 = http.createServer(app);
const port 		 = 5000;

//Generador de hoteles.
let hotelGenerator = require('./server/modules/builderDirector');

//Cuando hago http://localhost:5000/search, me genera una lista de hoteles al azar.
app.get('/search/:iata/:checkin/:checkou/:rooms/',(req,res)=>
{
	//Invoco al generador de hoteles y obtendo un listado.
	let hotelGen  = new hotelGenerator();
	let resu      = hotelGen.buildHotelList();
	
	//Antes, envio los headers para permitir el cross-origin.
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	if (resu.length>0)	
		res.json({hotels:resu});
	else
		res.json({hotels:[],msj:"No se encontraron resultados para la busqueda"});
});

//Agrego esta ruta, para los casos en que se escribe mal la url para obtener siempre un retorno.
app.get('*',(req,res)=>{
	res.json({error:"Servicio inexistente."});
});

//Inicializo el servidor, escuchando conexiones en el puerto fijado en port.
app.listen(port,(err)=>
{
	//Si hay un error, muestro por la consola, sino msj de inicio.
	if (err)
		console.log('ERROR: hubo un problema al inciar el server.');
	else
	{
		console.log('Server | Examén tecnico - Damián cipolat');		
		console.log('>Listen on port: '+port);
	}
});