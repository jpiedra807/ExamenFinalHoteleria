var app = angular.module('hotelApp', []);

app.controller('hotelCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  $scope.offersFound = false;
  $scope.upgraded = false;
  $scope.offers = [];
  $scope.selectedOffers = [];

  $http.get('api/reservation2.json')
  .then(function(response) {
    $scope.data = response.data;

    $http.get('api/offers.json')
    .then(function(offersResponse) {
      offersResponse.data.forEach(function(e, i, a) {
        if(e.item_id > $scope.data.item_id) {
          if(e.item_id !== 103 || (e.item_id === 103 && $scope.data.room_price >= 199)) {
            $scope.offers.push(e);
          } 
          else{
            $scope.noOfferText = 'No offers found!';
            console.log($scope.noOfferText);
          }
        }
      });

      if($scope.offers.length) {
        $scope.offersFound = true;
        $scope.offers.forEach(function(e, i, arr) {
        var priceArr = e.price.split(' ');
        e.price_val = priceArr.shift();
        e.price_freq = priceArr.join(' ');
        e.selected = false;
      });
    }
    });
  });

  $scope.toggleOffer = function toggleOffer(offer, $event) {
    $event.preventDefault();

    offer.selected = !offer.selected;
    $scope.selectedOffers = $filter('filter')($scope.offers, {selected: true});
    console.log($scope.selectedOffers);
    console.log(offer.selected);
  };

  $scope.removeSelected = function removeSelected() {
    $scope.offers.forEach(function(e, i, arr) {
      e.selected = false;
    });
    $scope.selectedOffers = $filter('filter')($scope.offers, {selected: true});
    console.log($scope.selectedOffers.length);
  };

  $scope.upgrade = function upgrade() {
    $scope.upgraded = true;
    //POST-ing the selected offers to a fake api
    $http.post('api/reservation2_confirm.json', $scope.selectedOffers)
    .then(function(upgradedResponse) {
      $scope.upgradedData = upgradedResponse.data;
      
      //check if a property called 'offers' exist, 
      //check if 'offers' is an array,
      //check if the 'offers' array is not empty
      if($scope.upgradedData.offers && Array.isArray($scope.upgradedData.offers) && $scope.upgradedData.offers.length) {
        $scope.upgradedData.room_price = $scope.upgradedData.offers.reduce(function(sum, nextOffer) {
          return sum + nextOffer.price;
        }, $scope.upgradedData.room_price);

        //the new image is the 1st image of the offers array
        $scope.upgradedData.image_url = $scope.upgradedData.offers[0].image_url;
      }
    });
  };
}]);