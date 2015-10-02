nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};
  factory.reviews = [];
  factory.addReview = function() {
    factory.reviews.push({ title: factory.title, text: factory.bodyText });
    factory.title = null;
    factory.bodyText = null;
  };

  return factory;
});
