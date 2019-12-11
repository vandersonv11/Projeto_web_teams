angular.module("listaTeams").controller("listaTeamsCtrl", function($scope, $http) {
  $scope.app = "listaTeams";
  $scope.teams = [];

  $scope.teste = "vanderson";

  var carregarTeams = function() {
      $http.get("http://localhost:3000/").success(function (data, status) {

      })
      // .error(function (data, status) {

      // });

  };
});
