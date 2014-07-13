angular.module( 'brokoli.menu', [])

.directive('mainMenu',function(){
	return {
		restrict:'E',
		templateUrl:'menu/menu.tpl.html'
	};
})

.controller('MenuController',function MenuController(){
	this.menuElements = {
		'0':{
			'text': 'Inicio',
			'uiSref':'home',
			'iconClass':'fa-home'
		},
		'1':{
			'text': 'Tienda',
			'uiSref':'shop',
			'iconClass':'fa-shopping-cart'
		},
		'2':{
			'text': 'Quiénes somos',
			'uiSref':'about',
			'iconClass':'fa-info-circle'
		}
	};
})

;


