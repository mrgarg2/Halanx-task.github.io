app.config(function($routeProvider,$locationProvider,$httpProvider){
    // $httpProvider.defaults.useXDomain = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    console.log('ROute Provide is',$routeProvider);
    $locationProvider.hashPrefix('');

    $routeProvider
                .when('/',{templateUrl:'views/home.html',controller:'homectrl'})
                .when('/about',{templateUrl:'views/about.html',controller:'aboutctrl'})
                .otherwise({template:'SOmething wrong with Url'});
});