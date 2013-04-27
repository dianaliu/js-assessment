if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        // Clever!
        // Shift num so the bit you're interested in is in the right most place.
        // 1 is 00..001 so &ing will return the value of the bit we want!
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var val = num.toString(2);
        while(val.length < 8) {
            val = '0' + val;
        }
        return val;
    },

    multiply: function(a, b) {
        var getPlaces = function(num) {
            if(num < 1) {
                return num.toString().length - num.toString().indexOf('.') - 1;
            } else {
                return 0;
            }
        };

        var aPlaces = getPlaces(a);
        var bPlaces = getPlaces(b);
        var places = Math.max(aPlaces, bPlaces);

        var m = Math.pow(10, places);
        var d = Math.pow(10, places * 2);

        var ret = ((a * m) * (b * m)) / d;
        return ret;
    }
  };
});

