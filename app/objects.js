if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	// fn.call(obj) works too. Difference is in how they pass arguments.
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var ret = [];

    	// obj is a hash, could've just iterated over it.
    	for(var p in obj) {
    		if(obj.hasOwnProperty(p)) {
    			ret.push(p + ": " + obj[p]);
    		}
    	}

    	// var props = Object.getOwnPropertyNames(obj);
    	// for(var i = 0; i < props.length; i++) {
    	// 	ret.push(props[i] + ": " + obj[props[i]]);
    	// }

    	return ret;
    }
  };
});
