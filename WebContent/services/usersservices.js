/**
 * 
 *//**
 * 
 */
app.factory('UsersServices',function($http){
		var BASE_URL="http://localhost:8082/OIMiddleweard"

			var usersServices={}
            usersServices.register=function(user){
			return $http.post(BASE_URL+"/register",user)
			}
		   usersServices.login=function(user)
		   {
			return $http.post(BASE_URL+"/login",user)
		   }
		    usersServices.logouts=function(){
			return $http.get(BASE_URL+"/logout")
		   }
		
return usersServices;
})