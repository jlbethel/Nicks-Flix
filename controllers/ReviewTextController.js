nicksFlix.controller('ReviewsTextCtrl', function ReviewsTextCtrl($scope, $sateParams, CoursesFactory, Utilitiesfactory) {
  $scope.review = UtilitiesFactory.findByTitle(ReviewsFactory.reviews, $stateParams.reviewTitle)
});
