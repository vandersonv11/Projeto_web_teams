angular.module("listaTeams").controller("listaTeamsCtrl", function($scope, $http) {
  $scope.app = "listaTeams";
  $scope.teams = [];

  $scope.teste = "vanderson";

  var carregarTeams = function() {
      $http.get("localhost").success(function (data) {

      }).error(function (data, status) {

      });
  };
});
