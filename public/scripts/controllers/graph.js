angular.module('app.controllers.graph', ['app.services.data', 'app.services.options'])
  .controller('GraphController', ['$scope', 'Data', 'Options', function ($scope, Data, Options) { 
    console.log($scope)
    $scope.chart = {
      labels: ["Kills", "Deaths", "Assists"],
      datasets: [
        {
          fillColor : "#e67e22",
          strokeColor : "#e67e22",
          pointColor : "#e67e22",
          pointStrokeColor : "#e67e22",
          data: Data.data[0]
        },
        {
          fillColor : "#f1c40f",
          strokeColor : "#f1c40f",
          pointColor : "#f1c40f",
          pointStrokeColor : "#f1c40f",
          data: Data.data[1]
        }
      ],
      options: Options.options
    }
  }]);