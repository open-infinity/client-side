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
		backboneMsgs: '../bower_components/backboneMsgs/backboneMsgs',
		
		//msgs.js 
		msgs: '../bower_components/msgsMaster/msgs',
		queue: '../bower_components/msgsMaster/channels/queue',
		pollable: '../bower_components/msgsMaster/channels/dispatchers/pollable',
		broadcast: '../bower_components/msgsMaster/channels/dispatchers/broadcast', 
		direct: '../bower_components/msgsMaster/channels/dispatchers/direct',
		unicast: '../bower_components/msgsMaster/channels/dispatchers/unicast',
		_subscribable: '../bower_components/msgsMaster/channels/dispatchers/_subscribable',
		
		//rest.js
		rest: '../bower_components/rest-master/rest',
		xhr: '../bower_components/rest-master/client/xhr',
		errorCode: '../bower_components/rest-master/interceptor/errorCode',
		retry: '../bower_components/rest-master/interceptor/retry',
		interceptor: '../bower_components/rest-master/interceptor',
		UrlBuilder: '../bower_components/rest-master/UrlBuilder',
		normalizeHeaderName: '../bower_components/rest-master/util/normalizeHeaderName',
		mixin: '../bower_components/rest-master/util/mixin',
		beget: '../bower_components/rest-master/util/beget',
		
		//when.js
		when : '../bower_components/whenMaster/when',
		delay : '../bower_components/whenMaster/delay'
 	       
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

console.log(window);

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
