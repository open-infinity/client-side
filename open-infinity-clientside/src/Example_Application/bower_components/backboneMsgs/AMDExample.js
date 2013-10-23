

(function (define) 
	{
	
		define(function (require) {

			var broadcastDispatcher, directDispatcher, unicastDispatcher, when, busCounter;

			broadcastDispatcher = require('../bower_components/msgsMaster/channels/dispatchers/broadcast');
			directDispatcher = require('../bower_components/msgsMaster/channels/dispatchers/direct');
			unicastDispatcher = require('../bower_components/msgsMaster/channels/dispatchers/unicast');
			when = require('../bower_components/whenMaster/when');

		});
		
	}
	
	(
		typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
	)
);



(function (root, factory) 
	{
		   if (typeof exports === 'object' && root.require) {
			 module.exports = factory(require("underscore"), require("backbone"));
		   } 
		   
		   else if (typeof define === "function" && define.amd) {
			  // AMD. Register as an anonymous module.
			  define(["underscore","backbone"], function(_, Backbone) {
				// Use global variables if the locals are undefined.
				return factory(_ || root._, Backbone || root.Backbone);
			  });
		   } 
		   
		   else {
			  // RequireJS isn't being used. Assume underscore and backbone are loaded in <script> tags
			  factory(_, Backbone);
		   }
	}
	
	(this, function(_, Backbone) {
										return Backbone.LocalStorage;
								}
	)
);
