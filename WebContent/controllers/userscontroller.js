/**
 * 
 *//**
 * 
 */
app.controller('UsersControl',function($scope,UsersServices,$location,$rootScope,$cookieStore){
	if($rootScope.currentUser!=undefined)
	{
	UsersServices.getUser().then(function(response){
	
		$scope.user=response.data
		},function(response){
			if(response.status==401)
				$location.path('/login')
		})
	}
	
	
	$scope.register=function(){
		//console.log($scope.user)
		UsersServices.register($scope.user).then(function(response){
				$scope.user={}
	alert("Inserted Succesfully")
			$location.path('/login')
		},function(response){
			console.log(response.data)
			console.log(response.status)
			$scope.error=response.data
	console.log(response.status)
		})
	}

	$scope.login=function(){
		UsersServices.login($scope.user).then(function(response){
		$rootScope.currentUser=response.data
	$cookieStore.put('currentUser',response.data)
		//$cookieStore.put('currentUser',response.data)
			$location.path('/home')
			},function(response){
				if(response.status==401)
					{
					$scope.error=response.data
					$location.path('/login')
					}
			})
	}
	
})
