# Hotels
Este proyecto se compone de dos partes: La primera es un backend hecho en node.js donde se expone un APIRest de hoteles, para ser consumida desde cualquier otra aplicacion. La segunda parte es una app desarrollada en Angular 5, donde se consume el API desarrollada en el punto anterior.

## Instalaciones necesarias
1. **Si no tiene Node.js instalado en su equipo**, por favor descargar la version mas estable del siguiente link https://nodejs.org/es/
2. **Si no tiene angular/cli instalado en su equipo**, por favor abrir una consola y ejecutar el comando **npm install -g @angular/cli** tal como se explica en la pagina principal del fabricante https://cli.angular.io/


## Iniciar el servidor:
Ir a la carpeta **api-rest** y abrir dicha ruta en consola, paso siguiente ejecutar **npm start** para que se pueda iniciar el servidor del API.
Para corroborar que no hay ningún error, puede ir al navegador y abrir la siguiente url http://localhost:1412/api/v1/hotels/ y esta **debe devolver el listado de todos los hoteles** en formato JSON.


## Iniciar la aplicación de Angular: 
Ir a la carpeta **ng-hotels-app** y abrir dicha ruta en consola, paso siguiente ejecutar el comando **npm install** para que descargue los módulos de node. Esto demorara algunos minutos, todo depende de su ancho de banda.

Una vez completo el proceso anterior, procedemos a ejecutar el comando **ng server --port 4200 -o** tambien dentro de la carpeta ng-hotels-app y esto abrirá la aplicación en su navegador.

Nota: es importante que la aplicacion de Angular se inicie en el puerto 4200 ya que si no es asi, seguramente tendran errores de No Access-Control-Allow-Origin


Dudas o comentarios: kaysinho@gmail.com

