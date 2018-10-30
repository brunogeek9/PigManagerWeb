angular.module("pigJs").controller("pigUsuarioCtrl", function ($scope,$http,$location) {
	$scope.app = "Pig web control";
	$scope.txMatriz = "Gerencia de Usuarios";
	$scope.usuarios = [];
	var carregaUsuarios = function () {
		$http.get("http://localhost:8080/PigManager/usuario").then(function (response) {
			$scope.usuarios = response.data;
		});
	};

	$scope.cadUsuario = function (usuario) {
	
		$http({
			url: "http://localhost:8080/PigManager/usuario",
			method: "POST",
			headers: {'Access-Control-Allow-Origin': '*'},
			data:  usuario 
		})
		.then(function(response) {
			console.log(response.data);
		}, 
		function(response) { 
			//console.log(response.data);
		});
		$location.path('view/listar-usuario.html');

	};
	carregaUsuarios();

});