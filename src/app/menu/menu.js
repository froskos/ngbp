angular.module( 'ngBoilerplate.menu', [])

.directive('mainMenu',function(){
	return {
		restrict:'E',
		templateUrl:'menu/menu.tpl.html',
		controllerAs:'MenuCtrl'	
	};
})

.controller('MenuController',function MenuController(){
	this.menuElements = {
		'Inicio':{
			'uiSref':'home',
			'iconClass':'fa-home'
		},
		'Tienda':{
			'uiSref':'shop',
			'iconClass':'fa-shopping-cart'
		},
		'Quienes somos':{
			'uiSref':'about',
			'iconClass':'fa-info-circle'
		}
	};
})

;


