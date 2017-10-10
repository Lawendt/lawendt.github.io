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
    $scope.topProjects = TopProjects;
    $scope.projectFilter = TopProjects;
    $scope.currentTagFilter = "Top";
    $scope.filterBy = function(tag) {
        tag = tag.tag;
        console.log(tag);
        if(tag == null || tag == undefined || tag == "Top")
        {
            $scope.projectFilter = $scope.topProjects;
            $scope.currentTagFilter = "Top";
        }
        else if(tag == "Everything"){
            $scope.projectFilter = $scope.projects;
            $scope.currentTagFilter = tag;
        }
        else{
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
    }
});