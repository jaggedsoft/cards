define([], function () {

    var utils = {

        capitalize: function (string) {
          return string.substr(0,1).toUpperCase() + string.substr(1);
        },

        consecutive: function (numbers) {
          return _.isEqual(numbers, _.range(numbers[0], _.last(numbers) + 1));
        }
    };

    return utils;

});