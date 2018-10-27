angular.module("pigJs").controller("pigUsuarioCtrl", function ($scope,$http) {
	$scope.app = "Pig web control";
	$scope.txMatriz = "Gerencia de Usuarios";
	$scope.usuarios = [];
	var carregaUsuarios = function () {
		$http.get("http://localhost:8080/PigManager/usuario").then(function (response) {
			$scope.usuarios = response.data;
		});
	};

	$scope.cadUsuario = function (usuario) {
		//delete $scope.matriz;
		//$http.post("http://localhost:8080/PigManager/usuario",usuario);
		$http({
			url: "http://localhost:8080/PigManager/usuario",
			method: "POST",
			headers: {'Access-Control-Allow-Origin': '*'},
			data:  usuario 
		})
		.then(function(response) {
			console.log(response.data);
		}, 
		function(response) { // optional
			//console.log(response.data);
		});

	};
	carregaUsuarios();
});