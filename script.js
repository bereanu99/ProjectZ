var app = angular.module('main', ['ngRoute']);

app.run(['$window', '$rootScope', function ($window, $rootScope) {
    $rootScope.windowWidth = window.innerWidth;
    window.addEventListener('resize', function () {
        $rootScope.$apply(function () {
            $rootScope.windowWidth = window.innerWidth;
            console.log($rootScope.windowWidth);
        });

    });
}]);

app.directive("scroll", function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {

            if (this.pageYOffset >= 35) {
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
    }).when('/admin', {
        templateUrl: './pages/admin.html',
        controller: 'adminCtrl',
    }).when('/test', {
        templateUrl: './pages/test.html',
        controller: 'testCtrl',

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

app.controller('contactCtrl', function ($scope, $http) {
    $scope.insert = {};
    $scope.insertData = function () {

        $http.post('http://localhost:3000/backend/roombook.php',angular.toJson({
            'name': $scope.name,
            'email': $scope.email,
            'age': $scope.age})).then(function succes(res) {
            console.log(res);
            alert('merge')
        }, function (res) {
            console.log(res);
            alert('nu merge')
            $scope.insert = null;
            $scope.errorFirstname = null;
            $scope.errorLastname = null;
        }, );
    };
});

app.controller('adminCtrl', function ($scope, $http) {
    $http.get("server.php").then(function (response) {

        $scope.products = response.data;
        console.log(response.status);
    });
});


app.controller('testCtrl', function ($scope, $http) {
    $scope.btnName = "Trimite";
    var data1 = {
        'name': $scope.name,
        'email': $scope.email,
        'age': $scope.age,
        'btnName': $scope.btnName,
        'id': $scope.id,
    };
    $scope.insert = function () {
        if ($scope.name == null) {
            alert("baga nume jegosule");
        } else {
            $http.post('http://localhost:3000/insert', angular.toJson({
                'name': $scope.name,
                'email': $scope.email,
                'age': $scope.age,
                'btnName': $scope.btnName,
                'id': $scope.id,
            })).then(function (response) {
                if (response.data)
                    console.log(response.data);
                alert(mere);
                $scope.msg = "Post Data Submitted Successfully!";

            }, function (response) {
                console.log(response.data);
                $scope.msg = "Service not Exists";
            })
        }
    }
})