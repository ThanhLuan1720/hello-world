var car_app = angular.module("car_app", []);

car_app.controller('Carcontroller', function Carcontroller($scope) {
  $scope.cars = [
    {
      name: 'honda',
      price: 25000,
      value:1,
      imgurl:"picture/honda.jpg"
    }, {
      name: 'toyota',
      price: 35000,
      value:4,
      imgurl:"picture/toyota.jpg"
    }, {
      name: 'mercedes',
      price: 50000,
      value:3,
      imgurl:"picture/mercedes.jpg"
    }
  ];
   this.order = 'price';
});