var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/home.html",
      },
    }
  });

  $stateProvider.state('reviews', {
    url: "/reviews",
    views: {
      'header': {
        templateUrl: "partials/header.html",
      },
      'body': {
        templateUrl: "partials/reviews.html"
      },
    }
  });
});
