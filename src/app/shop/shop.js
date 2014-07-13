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

.controller( 'ShopCtrl', function ShopCtrl( $scope ) {
  $scope.products = products_dummy;
})

;

var products_dummy = {
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
