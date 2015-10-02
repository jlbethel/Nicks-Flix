nicksFlix.factory('ReviewsFactory', function ReviewsFactory() {
  var factory = {};

  //hardcoded reviews for code-review
  factory.reviews = [ { title: "My thoughts on Intersteller", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }, { title: "Gone Girl movie of the year?!", text: "Sed nisl magna, hendrerit vitae placerat eu, ullamcorper eget tellus. Phasellus diam neque, ultricies sit amet porta vitae, convallis id urna. Duis in nisi ut magna posuere gravida. Etiam ante lacus, gravida vitae purus sit amet, porttitor iaculis tortor. Integer felis eros, iaculis eu metus sed, varius convallis massa. Duis a sagittis nunc. Ut ac odio id nibh pellentesque maximus." }, { title: "We desperately need another Fast & Furious movie", text: "Sed ligula elit, pulvinar vel fringilla id, vehicula sed orci. Phasellus fringilla ante dui. Nam tincidunt neque at varius condimentum. Praesent ac laoreet nulla. Nunc et libero metus. Pellentesque pretium, dolor blandit porttitor finibus, arcu quam dapibus urna, non pellentesque lacus nulla et odio. Interdum et malesuada fames ac ante ipsum primis in faucibus." }, { title: "The Martian <spoilers!>", text: "Nam efficitur sagittis interdum. Cras dictum dui vel bibendum commodo. Nam mollis tempus metus eget pellentesque. Aenean sed sollicitudin dolor. Praesent tellus ex, scelerisque quis turpis sit amet, luctus ultrices urna. Pellentesque sagittis, urna id fringilla aliquet, massa nisi commodo magna, eget efficitur mauris dolor non eros. In efficitur massa arcu, et cursus diam porta vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed et neque commodo, ullamcorper mi ut, rhoncus diam." } ];

  //function to add review
  factory.addReview = function() {
    factory.reviews.push({ title: factory.reviewTitle, text: factory.reviewText });
    factory.reviewTitle = null;
    factory.reviewText = null;
  };

  return factory;
});
