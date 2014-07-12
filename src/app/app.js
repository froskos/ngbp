angular.module( 'brokoli', [
  'templates-app',
  'templates-common',
  'brokoli.home',
  'brokoli.about',
  'brokoli.shop',
  'brokoli.menu',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  console.info('changing url to ', $stateProvider, $urlRouterProvider);
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  //App-wide constant and variables
  $scope.appName = 'brokoli';

  //App state management
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    console.info('changing state to ', toState, ' from ', fromState);
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | brokoli' ;
    }
  });
})

;

