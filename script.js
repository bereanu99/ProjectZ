var app = angular.module('main',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'./components/home.html',
        controller:'homeCtrl',
    })
})

app.controller('homeCtrl',function($scope,$location){
    $scope.$location
})