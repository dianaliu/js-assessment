if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var ret = [];

    	var props = Object.getOwnPropertyNames(obj);
    	for(var i = 0; i < props.length; i++) {
    		ret.push(props[i] + ": " + obj[props[i]]);
    	}

    	return ret;
    }
  };
});
