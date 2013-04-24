if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        var func2 = function(str2) {
            return str + ", " + str2;
        };

        return func2;
    },

    makeClosures : function(arr, fn) {
        var ret = [];
        var c = function(x) {
            return function() { return fn(x); };
        }

        for(var i = 0; i < arr.length; i++) {
            ret.push(c(arr[i]));
        }

        return ret;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn(str1, str2, str3);
        };
    },

    useArguments : function() {
        var sum = 0;

        for(var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        return sum;
    },

    callIt : function(fn) {
        arguments = Array.prototype.slice.call(arguments);
        arguments.splice(0,1);
        fn.apply(this, arguments)
    },

    partialUsingArguments : function(fn) {
        // Freezing one part of a function
        // May receive multiple arguments

        var args1 = Array.prototype.slice.call(arguments, 1);

        var partial = function(){
            var args2 =  Array.prototype.slice.call(arguments);
            return fn.apply(this, args1.concat(args2));
        };

        return partial;
    },

    curryIt : function(fn) {
        // Performing a function step by step
        // One argument at a time.
        // var ret = fn.apply(this, arguments);

        // for(var i = 0; i < fn.length; i++) {
        //     ret = function(arguments[i]) {
        //         return ret(val);
        //     }
        // }

        // return ret;
    }
  };
});
