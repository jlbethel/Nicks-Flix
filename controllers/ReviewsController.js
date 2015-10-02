nicksFlix.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory) {
  $scope.reviews = ReviewsFactory.reviews;
  $scopeReviewsFactory = ReviewsFactory;
})
