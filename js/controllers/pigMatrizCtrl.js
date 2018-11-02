angular.module("pigJs").controller("pigMatrizCtrl", function ($scope,$http) {
			$scope.app = "Pig web control";
			$scope.txMatriz = "Gerencia de matrizes";
			
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
				$http({
			        url: "http://localhost:8080/PigManager/matriz",
			        method: "POST",
			        headers: {'Access-Control-Allow-Origin': '*'},
			        data: matriz 
			    })
			    .then(function(response) {
			        console.log(response.data);
			    }, 
			    function(response) { 
			        console.log(response.data);
			    });
			    delete $scope.matriz;
			    $scope.matrizForm.setPristine();
			};
			
			carregarMatrizes();
			
			$scope.deletaMatriz = function (matriz) {
				$http({
			        url: "http://localhost:8080/PigManager/matriz/"+matriz.id,
			        method: "DELETE",
			        headers: {'Access-Control-Allow-Origin': '*'}
			    })
			    .then(function(response) {
			        console.log(response);
			    }, 
			    function(response) { 
			        console.log("deu certo não");
			    });
			};

			


		});