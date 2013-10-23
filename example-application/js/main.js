/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
	       
		/*
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'

		},
		*/
		
	       backboneMsgs: {
			deps: ['backbone'],
			exports: 'MyMsgs'

		},
	      
	       enquire: {
			exports: 'enquire'
		}
	       /*
		msgs: {
			exports: 'msgs'
		}
		*/
	},
	paths: {
		jquery: '../bower_components/jquery/jquery',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
	//	backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage',    
		text: '../bower_components/requirejs-text/text',
		enquire: '../bower_components/enquire/enquire',
		msgs: '../bower_components/msgsMaster/msgs',
		backboneMsgs: '../bower_components/backboneMsgs/backboneMsgs',
		queue: '../bower_components/msgsMaster/channels/queue',
		pollable: '../bower_components/msgsMaster/channels/dispatchers/pollable'
 	       
	}
});

require([
	'backbone',
//	'views/app',
	'routers/router',
	'enquire',
	'require'
//	'msgs'
], function (Backbone, /*AppView,*/ Workspace, enquire, require/*, msgs*/) {
//	/*jshint nonew:false*/
//	// Initialize routing and start Backbone.history()
	new Workspace();
	Backbone.history.start();

	var queryM, queryD, handlerM, handlerD;
	
	queryM = "screen and (max-width: 799px)";
	queryD = "screen and (min-width: 800px)";
	handlerM = {
		match : function() {
			console.log("matched queryM");
			require([    
					'views/appM'
					], function (AppViewM) {
		
							// Initialize the application view 
							//var myVM = new AppViewM();
						});
		},
		unmatch : function() { console.log("handlerM unmatched"); }
	};
	
	handlerD = {
		match : function() {
			console.log("matched queryD");
			require([    
					'views/app'
					], function (AppView) {
		
							// Initialize the application view
							var myV = new AppView();
						});
		},
		unmatch : function() { console.log("queryD unmatched"); }
	};

		enquire.register(queryM, handlerM);
		enquire.register(queryD, handlerD);
		
	
	
	// Initialize the application view
//	new AppView();
});
