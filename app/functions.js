if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        // Context should be null, to be more accurate.
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        // Call works here too.
        return fn.call(obj);
        // return fn.apply(obj);
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
            // Is it important to use call to define context?
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
        // All in one step!
        var arguments = Array.prototype.slice.call(arguments, 1);
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
        var callFn = function(fn, arguments) {
            return fn.apply(null, arguments);
        }

        var collectArgs = function(args, count) {
            return function(arg) {
                args.push(arg);
                if(args.length == count) {
                    return callFn(fn, args);
                } else {
                    return collectArgs(args, count);
                }
            }
        }

        return collectArgs([], fn.length);
    }
  };
});
