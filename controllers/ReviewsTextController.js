nicksFlix.controller('ReviewsTextCtrl', function ReviewsTextCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.review = UtilitiesFactory.findByTitle(ReviewsFactory.reviews, $stateParams.reviewTitle)
});
