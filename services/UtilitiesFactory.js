nicksFlix.factory('UtilitiesFactory', function() {
  return {
    findByTitle: function(collection, title) {
      for (var i = 0; i < collection.length, i++) {
        if (collection[i].title == title)
        return collection[i];
      }
      return null;
    }
  }
});
