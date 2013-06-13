if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var ret = [];

    	var inspect = function(a, b) {
    	    for(var i = 0; i < a.files.length; i ++) {

    	        if(typeof a.files[i] === 'string') {
    	            if(undefined == b || b === a.dir) {
    	                ret.push(a.files[i]);
    	            }
    	        } else {
    	            if(b === a.dir) {
    	                inspect(a.files[i], a.files[i].dir);
    	            } else {
    	                inspect(a.files[i], b);
    	            }
    	        }
    	    }
    	};

    	inspect(data, dirName);

    	return ret;
    },

    permute: function(arr) {
    	var len = arr.length;
    	var ret = [];
    	var p = 1;

    	for(var i = 0; i < arr.length; i++) {
    		p = p * i;
    	}

    	return ret;
    }
  };
});
