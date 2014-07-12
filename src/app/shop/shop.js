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
})

;
