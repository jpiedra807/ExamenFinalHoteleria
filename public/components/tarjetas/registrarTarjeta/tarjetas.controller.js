(() => {
  'use strict';
  angular
    .module('correos')
    .controller('controladorTarjetas', controladorTarjetas);

  controladorTarjetas.$inject = ['$state', '$scope', '$location', 'servicioUsuarios']

  function controladorTarjetas($state, $scope, $location, servicioUsuarios) {
    let vm = this;

    vm.listaTarjeta = () => {
      $state.go('main.listartarjetas');

    }

    let idRandom = getRandom();
    console.log(getRandom());
    vm.pnuevaTarjeta = {};



    vm.registrarTarjeta = (pnuevaTarjeta) => {

      let session = JSON.parse(sessionStorage.getItem('sesion'));
      let usuario = session.nombre;
      

      let mes = $("#month option:selected").val();
      let year = $("#year option:selected").val();
      let expiracion = mes + '/' + year;

      let objnuevaTarjeta = new Tarjeta(idRandom, pnuevaTarjeta.nombre, pnuevaTarjeta.numero, expiracion, pnuevaTarjeta.cvv);

      let registro = servicioUsuarios.addTarjeta(objnuevaTarjeta);
      console.log ('registro', registro);
      if (registro) {
        swal("Registro exitoso", "Tarjeta registrada con exito", "success", {

          button: "Aceptar",});

          vm.pnuevaTarjeta = null;

      } else {
        swal("Registro fallido", "Ha ocurrido un error, intente nuevamente", "error", {
          button: "Aceptar",
        });
        
      }
      vm.pnuevaTarjeta = null;
    };


    function getRandom() {
      let randomID = (
        document.getElementById('field1').value = Math.floor(Math.random() * 100000));
      let randomToString = randomID.toString();
        
      return randomToString;
      console.log('randomID', randomToString);
    }

    $(function() {

      var owner = $('#owner');
      var cardNumber = $('#cardNumber');
      var cardNumberField = $('#card-number-field');
      var CVV = $("#cvv");
      var mastercard = $("#mastercard");
      var confirmButton = $('#confirm-purchase');
      var visa = $("#visa");
      var amex = $("#amex");
      var discover = $("#discover");
  
  
      cardNumber.payform('formatCardNumber');
      CVV.payform('formatCardCVC');
  
  
      cardNumber.keyup(function() {
  
          amex.removeClass('transparent');
          visa.removeClass('transparent');
          mastercard.removeClass('transparent');
          discover.removeClass('transparent');
  
          if ($.payform.validateCardNumber(cardNumber.val()) == false) {
              cardNumberField.addClass('has-error');
          } else {
              cardNumberField.removeClass('has-error');
              cardNumberField.addClass('has-success');
          }
  
          if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
              mastercard.addClass('transparent');
              amex.addClass('transparent');
              discover.addClass('transparent');
          } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
              mastercard.addClass('transparent');
              visa.addClass('transparent');
              discover.addClass('transparent');
          } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
              amex.addClass('transparent');
              visa.addClass('transparent');
              discover.addClass('transparent');
          } 
          else if ($.payform.parseCardType(cardNumber.val()) == 'discover') {
            amex.addClass('transparent');
            visa.addClass('transparent');
            mastercard.addClass('transparent');
          }
          
      });
  
      // confirmButton.click(function(e) {
  
      //     e.preventDefault();
  
      //     var isCardValid = $.payform.validateCardNumber(cardNumber.val());
      //     var isCvvValid = $.payform.validateCardCVC(CVV.val());
  
      //     if(owner.val().length < 5){
      //         alert("Nombre en la Tarjeta Invalido");
      //     } else if (!isCardValid) {
      //         alert("Número de la tarjeta invalido");
      //     } else if (!isCvvValid) {
      //         alert("Invalido CVV");
      //     } else {
      //         // Everything is correct. Add your form submission code here.
      //         alert("Datos Correctos");
      //     }
      // });
  });

  }
})();