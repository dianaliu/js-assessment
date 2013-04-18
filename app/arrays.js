if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var i = 0; i < arr.length; i++) {
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
        for(var i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i]);
        }

        return arr1;
    },

    insert : function(arr, item, index) {
        for(var i = arr.length; i > index; i--) {
            arr[i] = arr[i-1];
        }

        arr[index] = item;

        return arr;
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
            if(count[key] > 1) {
                dupes.push(parseInt(key, 10));
            }
        }

        return dupes;
    },

    square : function(arr) {
        for(var i = 0; i < arr.length; i++) {
            arr[i] = Math.pow(arr[i], 2);
        }

        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var indices = [];

        for(var i = 0; i < arr.length; i++) {
            if(target == arr[i]) {
                indices.push(i);
            }
        }

        return indices;
    }
  };
});
