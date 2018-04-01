/**
 * 
 */
var app=angular.module('app',['ngRoute','ngCookies'])

app.config(function($routeProvider){
	alert("configured")
	$routeProvider
	.when('/register',{
		templateUrl:'view/Register.html',
		controller:'UsersControl'
	})
	.when('/login',{
	templateUrl:'view/Login.html',
	controller:'UsersControl'		
	})

	.otherwise({templateUrl:'view/Home.html'})
})	

	
	app.run(function($rootScope,$cookieStore,$location,UsersServices){
alert($cookieStore.get('currentUser'))
	if($rootScope.currentUser==undefined)
//
$rootScope.currentUser=$cookieStore.get('currentUser')
  
$rootScope.logouts=function(){
			UsersServices.logouts().then(function(response){
				delete $rootScope.currentUser;
				$cookieStore.remove('currentUser')
				$location.path('/home')
			},function(response){
				console.log(response.data)
				$location.path('/login')
			})
			
		}
})

