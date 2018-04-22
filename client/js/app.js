//Incluyo al modulo el control slider.
var app   = angular.module("hotelResuApp",['ngRoute','ui.slider']);

//Según la ruta traigo el template y el controlador.
app.config(function($routeProvider)
{
    $routeProvider
    .when("/", {
        templateUrl : "./html/search.html",
        controller  : "resuHotelController"
    })
    .otherwise({
        template : "<h1>#ERROR</h1><p>No hay una ruta que mostrar</p>"
    });
});