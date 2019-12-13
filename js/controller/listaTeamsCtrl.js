
app.controller("listaTeamsCtrl", function($scope, $http) {
  $scope.array = [];

  //GET
  /* outro formato de get
  var carregarTeams = function() {
   $http.get("http://localhost:3000/teams")
     .then(function(response) {
       console.log(response);
       $scope.array = response.data;
     });
  };*/

  var carregarTeams = function() {
    $http({
      method: 'GET',
      url: 'http://localhost:3000/teams'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.array = response.data;

    }, function errorCallback(response) {
      alert("ERRO AO CARREGAR OS DADOS")
    });
  };

  // POST
  /*
  $scope.adicionarTeam = function(team) {
    team.data = new Date();
    $http.post("http://localhost:3000/teams", team).then(function(response) {
      delete $scope.team;
      $scope.teamForm.$setPristine();
      carregarTeams();
    });
  };*/
  $scope.adicionarTeam = function(team) {
    $http({
          method: "POST",
          url: 'http://localhost:3000/teams',
          data: team
      })
      .then(function(response) {
              console.log(response);
              delete $scope.team;
              $scope.teamForm.$setPristine();
              carregarTeams();
              alert("EQUIPE CRIADA COM SUCESSO!!!")

      },
      function(response) { // optional
          alert("ERRO AO CRIAR EQUIPE!!!")
      });
  };


  // Del
  /*
  $scope.apagarTeam = function(teams) {
    $scope.teams = teams.filter(function(team) {
      if (!team.selecionado) return team;
    });
  };*/
  $scope.apagarTeam = function(team) {
    $http({
          method: "DELETE",
          url: 'http://localhost:3000/teams' + team.id
      })
      .then(function(response) {
              delete $scope.team;
              carregarTeams();
              alert("EQUIPE DELETADA COM SUCESSO!!!")

      },
      function(response) { // optional
          alert("ERRO AO DELETAR EQUIPE!!!")
      });
  };


  $scope.isTeamSelecionado = function(teams) {
    return teams.some(function(team) {
      return team.selecionado;
    });
  };

  // ordenação
  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarTeams();
});
