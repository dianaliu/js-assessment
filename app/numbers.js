if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var binary = num.toString(2);
        var value = binary.charAt(binary.length - bit);
        return  parseInt(value, 10);
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
        // turn decimals into whole numbers, divide by 10... at the end.
        var bPlaces = b.toString().length - b.toString().indexOf('.') - 1;
        var m = Math.pow(10, bPlaces);
        var d = Math.pow(10, bPlaces * 2);

        var ret = ((a * m) * (b * m)) / d;
        return ret;
    }
  };
});

