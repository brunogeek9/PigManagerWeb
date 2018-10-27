angular.module("pigJs").controller("pigMatrizCtrl", function ($scope,$http) {
			$scope.app = "Pig web control";
			$scope.txMatriz = "Gerencia de matrizes";
			//carregarMatrizes();
			//	
			//];
			$scope.matrizes = [];
			
			$scope.estagios = ['Grávida', 'Prenha', 'Aleitamento', 'Descanso'];
			
			$scope.cadMatriz = function (matriz) {
				matriz.arquivo = "foto";
				matriz.dataNascimento = '2018-01-01';
				matriz.identificador = "2222";
				matriz.raca = "essa fera";
				matriz.peso = 150;
				matriz.estagio = "GRAVIDA";
				
				$scope.matrizes.push(angular.copy(matriz));
				$scope.matrizForm.$setPristine();
				console.log(matriz);
				//delete $scope.matriz;
				//$http.post("http://localhost:8080/PigManager/matriz",matriz);
				$http({
			        url: "http://localhost:8080/PigManager/matriz",
			        method: "POST",
			        headers: {'Access-Control-Allow-Origin': '*'},
			        data: { 'matriz' : matriz }
			    })
			    .then(function(response) {
			        console.log(response.data);
			    }, 
			    function(response) { // optional
			        console.log(response.data);
			    });
			};

			

			var carregarMatrizes = function () {
				$http.get("http://localhost:8080/PigManager/matriz").then(function (response) {
					$scope.matrizes = response.data;
				});
			};
			
			carregarMatrizes();
			
		});