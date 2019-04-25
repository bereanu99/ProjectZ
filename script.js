var app = angular.module('main',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'./pages/home.html',
        controller:'homeCtrl',

    }).when('/galerie',{
        template:'./pages/galerie.html',
        controller:'galerieCtrl',

    }).when('/evenimente.html',{
        template:'./pages/evenimente.html',
        controller:'evenimenteCtrl',

    }).when('/contact.html',{
        template:'./pages/contact.html',
        controller:'contactCtrl',
    }).otherwise({
        template: '404',
    })
})


app.controller('homeCtrl',function($scope,$location){
    $scope.$location
})

app.controller('galerieCtrl',function($scope,$location){
    $scope.$location
})

app.controller('evenimenteCtrl',function($scope,$location){
    $scope.$location
})

app.controller('contactCtrl',function($scope,$location){
    $scope.$location
})