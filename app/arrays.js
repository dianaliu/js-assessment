if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        // Could cache arr.length, but difference is ms.
        for(var i = 0, len = arr.length; i < len; i++) {
        // for(var i = 0; i < arr.length; i++) {
            if(arr[i] == item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for(var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var removed = [];

        for(var i = 0; i < arr.length; i++) {
            if(arr[i] != item) {
                removed.push(arr[i]);
            }
        }

        return removed;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = arr.length; i > 0; i--) {
            if(arr[i] == item) {
                arr.splice(i, 1);
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        // There is array.concat!!!
        return arr1.concat(arr2);

        // for(var i = 0; i < arr2.length; i++) {
        //     arr1.push(arr2[i]);
        // }

        // return arr1;
    },

    insert : function(arr, item, index) {
        // Use arr.splice -__-
        arr.splice(index, 0, item)
        return arr;

        // for(var i = arr.length; i > index; i--) {
        //     arr[i] = arr[i-1];
        // }

        // arr[index] = item;

        // return arr;
    },

    count : function(arr, item) {
        var count = 0;

        for(var i = 0; i < arr.length; i++) {
            if(arr[i] == item) {
                count++;
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var count = {};
        var dupes = [];

        // Count occurances per item
        for(var i = 0; i < arr.length; i++) {
            var key = arr[i];

            if(count[key] === undefined) {
                count[key] = 1;
            } else {
                count[key]++;
            }
        }

        // Return items that have occured > 1 time
        for(var key in count) {
            // Can check that count[key exists] with count.hasOwnProperty(key)
            // ...but undefined > 1 = false
            if(count[key] > 1) {
                dupes.push(parseInt(key, 10));
            }
        }

        return dupes;
    },

    square : function(arr) {
        // Shouldn't modify original array, instead make copy.

        var squares = []

        for(var i = 0; i < arr.length; i++) {
            squares[i] = Math.pow(arr[i], 2);
        }

        return squares;
    },

    findAllOccurrences : function(arr, target) {
        var indices = [];

        // === is more accurate, checks type as well.
        for(var i = 0; i < arr.length; i++) {
            if(target === arr[i]) {
                indices.push(i);
            }
        }

        return indices;
    }
  };
});
