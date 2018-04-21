# ng-hotels-app

Este proyecto ha sido generado con [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.
La aplicacion consiste en una app que consume un APIRest ubicado en este mismo repositorio, y hace filtros sobre los resultados obtenidos, para pintarlos en un sitio de busquedas de Hoteles.

## Servidor de desarrollo

Abrir esta carpeta en consola, y ejecutar `npm install` para que se descarguen los modulos de node. 

Ejecutar `ng server --port 4200 -o` y esto, automaticamente abrirá en su explorador la direccion `http://localhost:4200/hotels`. Para que la aplicacion no de error, se debe tambien servir el API Rest ubicado en la parte de atras de este mismo repositorio.


## Generando el entorno de produccion

Ejecutar `ng build -prod` en el proyecto. Esto generará una carpeta `dist/` en el directorio. 

