var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
   $routeProvider
	   .when("/", {
      templateUrl: "portfolio.html"
   })
        .when("/about", {
       templateUrl: "about.html"
   })
	   .otherwise({
      template: "<b>Opção inválida!</b>"
   });
});

app.controller('myCtrl', function($scope) {
    $scope.projects = Projects;
    $scope.projectFilter = Projects;
    $scope.currentTagFilter = "Everything";
    $scope.filterBy = function(tag) {
        tag = tag.tag;
        console.log(tag);
        if(tag == null || tag == undefined)
        {
            $scope.projectFilter = $scope.projects;
            $scope.currentTagFilter = "Everything";
            return;
        }
        $scope.currentTagFilter = tag;
        $scope.projectFilter = [];
        for (var p in $scope.projects){
            console.log(p);
            for(var t in $scope.projects[p].tags) {
                
                if(tag ==  $scope.projects[p].tags[t]){
                    $scope.projectFilter.push($scope.projects[p]);
                    break;
                }
            }
        }
    }
});