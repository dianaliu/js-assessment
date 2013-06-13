if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
	return {
		async : function(value) {
			var dfd = $.Deferred();
			dfd.resolve(value);
			return dfd.promise();
		},

		manipulateRemoteData : function(url) {
			var dfd = $.Deferred();

			$.get(url).done(function(resp) {
				var ret = $.map(resp.people, function(obj, index) {
					return obj.name;
				});

				dfd.resolve(ret.sort());
			});

			return dfd.promise();
		}
	};
});
