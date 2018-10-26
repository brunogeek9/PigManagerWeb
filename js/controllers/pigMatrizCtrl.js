angular.module("pigJs").controller("pigMatrizCtrl", function ($scope) {
			$scope.app = "Pig web control";
			$scope.txMatriz = "Gerencia de matrizes";
			$scope.matrizes=[
				{codigo:10, raca:"seila", peso:120, dataNasc:"19/02/2018"}
			];
			$scope.estagios =[
				{Estagio: "Prenha"},
				{Estagio: "Grávida"},
				{Estagio: "Aleitamento"},
				{Estagio: "Descanso"}
			];
			$scope.cadMatriz = function (matriz) {
				$scope.matrizes.push(angular.copy(matriz));
			};
		});