var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      // 'header': {
      //   templateUrl: "partials/header.html",
      // },
      'home': {
        templateUrl: "partials/home.html",
      },
    }
  });
});
