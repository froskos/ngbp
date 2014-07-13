angular.module( 'brokoli.shop', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'shop', {
    url: '/shop',
    views: {
      "main": {
        controller: 'ShopCtrl',
        templateUrl: 'shop/shop.tpl.html'
      }
    },
    data:{ pageTitle: 'Shop' }
  });
})

.controller( 'ShopCtrl', function ( $scope ) {
  $scope.products = products_dummy;
  console.warn($scope.products);
  $scope.categories = categories_dummy;
})

// .directive('productElem', function(){
//   return {
//     restrict:'E',
//     templateUrl:'shop/_product.tpl.html'
//     controllerAs:'shopCtrl'
//   };
// })

;

//Dummy products 
var product_template = {
  'name':'',
  'category':'',
  'images':[''],
  'price':'',
  'stars':'',
  'is':{
    'local': true,
    'vegetarian': false,
    'vegan': false,
    'glutenfree': false,
    'fairtrade': false,
    'offer': false,
    'new': false
  },
  'reviews':[]
};

var pd1 = {
  'name':'',
  'category':'',
  'images':[''],
  'price':'',
  'stars':'',
  'is':{
    'local': true,
    'vegetarian': false,
    'vegan': false,
    'glutenfree': false,
    'fairtrade': false,
    'offer': false,
    'new': false
  },
  'reviews':[]
};

var pd2 = {
  'name':'',
  'category':'',
  'images':[''],
  'price':'',
  'stars':'',
  'is':{
    'local': true,
    'vegetarian': false,
    'vegan': false,
    'glutenfree': false,
    'fairtrade': false,
    'offer': false,
    'new': false
  },
  'reviews':[]
};
var pd3 = {
  'name':'',
  'category':'',
  'images':[''],
  'price':'',
  'stars':'',
  'is':{
    'local': true,
    'vegetarian': false,
    'vegan': false,
    'glutenfree': false,
    'fairtrade': false,
    'offer': false,
    'new': false
  },
  'reviews':[]
};

var products_dummy = [pd1,pd2,pd3];

//Dummy categories
var categories_dummy = [
  'cestas',
  'verduras',
  'frutas',
  'otros'
];
