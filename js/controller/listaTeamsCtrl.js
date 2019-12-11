app.controller("listaTeamsCtrl", function($scope, $http) {
  $scope.teams = [];
  //GET
  var carregarTeams = function() {
    $http.get('http://localhost:3000').then(function(res) {
      $scope.teams = res.data;
    });
  };

  $scope.adicionarTeam = function(team) {
    team.data = new Date();
    $http.post("http://localhost:3000", team).success(function(data) {
      delete $scope.team;
      $scope.teamForm.$setPristine();
      carregarTeam();
    });
  };

  $scope.apagarTeam = function(teams) {
    $scope.teams = teams.filter(function(team) {
      if (!team.selecionado) return team;
    });
  };

  $scope.isTeamSelecionado = function(teams) {
    return teams.some(function(team) {
      return team.selecionado;
    });
  };

  $scope.ordenarPor = function (campo) {
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};
  carregarTeams();
});
