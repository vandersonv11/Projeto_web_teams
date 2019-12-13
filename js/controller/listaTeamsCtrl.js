
app.controller("listaTeamsCtrl", function($scope, $http) {
  $scope.array = []; //VARIAVEL   QUE RECEBERA OS DADOS DO SERVIDOR
  $scope.titulo = '';
  $scope.edit = [];


  $scope.cadTeams = function() {

    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = true;
    $scope.titulo = 'CADASTRO';
  };
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


  // DELETE
  $scope.apagarTeam = function(team) {

    $http({
          method: "DELETE",
          url: 'http://localhost:3000/teams/' + team.id
      })
      .then(function(response) {
              delete $scope.team;
              alert("EQUIPE DELETADA COM SUCESSO!!!");
              carregarTeams()

      },
      function(response) { // optional
          alert("ERRO AO DELETAR EQUIPE!!!")
      });
  };

  //EDITAR
  $scope.editarTeam = function(team) {
      $scope.edit = team;
      $scope.titulo = 'EDITAR';
      $scope.submit = false;
      $scope.update = true;
      $scope.cancel = true;
  };

  // PUT
  $scope.updateTeam = function() {
    $http({
          method: "PUT",
          url: 'http://localhost:3000/teams/' + $scope.edit
      })
      .then(function(response) {
        console.log(response);
              delete $scope.array;
              alert("EQUIPE EDITADA COM SUCESSO!!!");
              carregarTeams()

      },
      function(response) { // optional
          alert("ERRO AO EDITAR EQUIPE!!!")
      });
  };


  //ORDENAR OS ELEMENTOS
  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarTeams(); //CARREGAR O BANCO NO FRONTEND
});
