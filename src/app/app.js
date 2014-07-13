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
  $scope.dummyText = 'Lorem fistrum commodo mamaar sit amet nostrud a wan sed. Elit de la pradera condemor diodenoo occaecat reprehenderit condemor la caidita dolore pecador a gramenawer. Aute voluptate condemor está la cosa muy malar por la gloria de mi madre nisi ex. Cillum adipisicing aute exercitation por la gloria de mi madre no puedor ut no puedor ut quis. Ese pedazo de fistro consectetur a wan aute ese que llega magna llevame al sircoo reprehenderit. Aute jarl mamaar eiusmod. Te voy a borrar el cerito caballo blanco caballo negroorl dolor pupita tempor caballo blanco caballo negroorl consequat. Diodeno me cago en tus muelas mamaar te voy a borrar el cerito.';

  //App state management
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    console.info('changing state to ', toState, ' from ', fromState);
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | brokoli' ;
    }
  });
})

;