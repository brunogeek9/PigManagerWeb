angular.module("pigJs").controller("pigMatrizCtrl", function ($scope,$http) {
			$scope.app = "Pig web control";
			$scope.txMatriz = "Gerencia de matrizes";
			//carregarMatrizes();
			//	
			//];
			$scope.matrizes = [];
			
			$scope.estagios = ['COBERTA', 'PRENHES', 'LACTACAO', 'VAZIA'];
			
			var carregarMatrizes = function () {
				$http.get("http://localhost:8080/PigManager/matriz").then(function (response) {
					$scope.matrizes = response.data;
				});
			};

			$scope.cadMatriz = function (matriz) {
				matriz.arquivo = "foto";
				$scope.matrizes.push(angular.copy(matriz));
				$scope.matrizForm.$setPristine();
				$http({
			        url: "http://localhost:8080/PigManager/matriz",
			        method: "POST",
			        headers: {'Access-Control-Allow-Origin': '*'},
			        data: matriz 
			    })
			    .then(function(response) {
			        console.log(response.data);
			    }, 
			    function(response) { // optional
			        console.log(response.data);
			    });
			};
			
			carregarMatrizes();
			
		});