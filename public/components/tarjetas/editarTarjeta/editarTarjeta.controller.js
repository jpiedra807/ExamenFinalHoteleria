(() => {

  'use strict';
  angular
    .module('correos')
    .controller('controladorEditarTarjetas', controladorEditarTarjetas);

  controladorEditarTarjetas.$inject = ['$http', '$state', '$stateParams', '$location', 'servicioUsuarios'];

  function controladorEditarTarjetas($http, $state, $stateParams, $location, servicioUsuarios) {
    let vm = this;

    // // Format input for card number entry
    // var input = document.getElementById('cardNumber');
    // payform.cardNumberInput(input);
  
    // vm.getType = () => {
    //   console.log(payform.parseCardType(vm.editarTarjeta.numero));
    // }
    
    vm.editarTarjeta = {};

    let objTarjetaAEditar = JSON.parse($stateParams.objTarjetaTemp);
    let mes = $("#month option:selected").val();
    let year = $("#year option:selected").val();
    let expiracion = mes + '/' + year;

    let objNuevaTarjeta = new Tarjeta(objTarjetaAEditar.id, objTarjetaAEditar.nombre, objTarjetaAEditar.numero, objTarjetaAEditar.expiracion, objTarjetaAEditar.cvv);

    vm.editarTarjeta.id = objNuevaTarjeta.id;
    vm.editarTarjeta.nombre = objNuevaTarjeta.nombre;
    vm.editarTarjeta.numero = objNuevaTarjeta.numero;
    expiracion = objNuevaTarjeta.expiracion;
    vm.editarTarjeta.cvv = objNuevaTarjeta.cvv;

    vm.cambiarEstadoTarjeta = (pEstado) => {
      let listaTarjeta = servicioUsuarios.getTarjeta();

      listaTarjeta.forEach(objTarjetas => {
        if (objTarjetas.id == objNuevaTarjeta.id) {
          objTarjetas.cambiarEstadoDeActividadTarjeta(pEstado);
        }
        servicioUsuarios.actualizarTarjeta(objTarjetas);
      });
      $state.go('main.listartarjetas');
    };



    vm.editTarjeta = (pTarjeta) => {
      let listaTarjeta = servicioUsuarios.getTarjeta();
      let mes = $("#month option:selected").val();
      let year = $("#year option:selected").val();
      let expiracion = mes + '/' + year;
  

      listaTarjeta.forEach(objTarjeta => {
        if (objTarjeta.id == objNuevaTarjeta.id) {
          objTarjeta.id = pTarjeta.id;
          objTarjeta.nombre = pTarjeta.nombre;
          objTarjeta.numero = pTarjeta.numero;
          objTarjeta.expiracion = expiracion;
          objTarjeta.cvv = pTarjeta.cvv;

          servicioUsuarios.actualizarTarjeta(objTarjeta);
        }
      });
      swal("Edición exitosa", "Tarjeta editada correctamente", "success", {
        button: "Aceptar",
      });
      $state.go('main.listartarjetas');

    };

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
  
      // Use the payform library to format and validate
      // the payment fields.
  
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