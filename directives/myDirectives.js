nicksFlix.directive("nightMode", function() {
  return function (scope, element, attrs) {

  element.bind("click", function() {
    var page = angular.element(document).find('body');
      page.toggleClass("night");
    });
  }
});
