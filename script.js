var app = angular.module('main', ['ngRoute']);

app.run(['$window', '$rootScope', function($window, $rootScope) {
    $rootScope.windowWidth = window.innerWidth;
    window.addEventListener('resize', function() {
        $rootScope.$apply(function() {
            $rootScope.windowWidth = window.innerWidth;
            console.log( $rootScope.windowWidth);
        });
     
    });
}]);

app.directive("scroll", function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {

            if (this.pageYOffset >= 35 ) {
                scope.boolChangeClass = true;

            } else {
                scope.boolChangeClass = false;

            }
            scope.$apply();
        });
    };
});
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: './pages/home.html',
        controller: 'homeCtrl',

    }).when('/home', {
        templateUrl: './pages/home.html',
        controller: 'homeCtrl',

    }).when('/galerie', {
        templateUrl: './pages/galerie.html',
        controller: 'galerieCtrl',

    }).when('/evenimente', {
        templateUrl: './pages/evenimente.html',
        controller: 'evenimenteCtrl',

    }).when('/contact', {
        templateUrl: './pages/contact.html',
        controller: 'contactCtrl',
    })
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})



app.controller('homeCtrl', function ($scope, $location) {
    $scope.message = "homeCTRl";

})

app.controller('galerieCtrl', function ($scope, $location) {
    $scope.message = "galerieCtrl";
})

app.controller('evenimenteCtrl', function ($scope, $location) {
    $scope.message = "evenimenteCtrl";
})

app.controller('contactCtrl', function ($scope, $location) {
    $scope.message = "contactCtrl";
})