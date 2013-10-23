/**
 * Backbone Msgs Adapter
 * Version 0.0.1
 */


(function (root, factory) {
   if (typeof exports === 'object' && root.require) {
     module.exports = factory(require("underscore"), require("backbone"), require("msgs"), require("queue"));
   } else if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["underscore","backbone","msgs", "queue"], function(_, Backbone, msgs, queue) {
        // Use global variables if the locals are undefined.
        return factory(_ || root._, Backbone || root.Backbone , msgs /*|| root.msgs*/);
      });
   } else {
      // RequireJS isn't being used. Assume underscore and backbone are loaded in <script> tags
      factory(_, Backbone, msgs, queue);
   }
}(this, function(_, Backbone, msgs, queue) {



  //Constructor
  //Backbone.Msgs = window.MyMsgs = function() {
  Backbone.Msgs = function() {
	console.log("msgs created");
	//Constructor code here!  
  
	this.bus = msgs.bus();
	console.log(this.bus);

	//bus test1 queue channel --------------------------------------
			this.qChannel = this.bus.queueChannel();
			
			console.log(this.qChannel.type);
			console.log(this.qChannel);
	
	//bus test2 default direct channel------------------------------

			this.publisher = this.bus.channel();
			
			console.log(this.publisher.type);
			console.log(this.publisher);
			this.consumer = {
				handle: function (message) {
					console.log(message);
				}
			};
			
			this.publisher.subscribe(this.consumer);
    
  };

    _.extend(Backbone.Msgs.prototype, {

      /*
      // example function1
      example1: function() {
    
      },

      //example function2
      example2: function() {
	
      }
    */
    });


  //Msgs.sync
//  Backbone.Msgs.sync = window.MyMsgs.sync = function(method, model, options) {
   Backbone.Msgs.sync =function(method, model, options) { 
    var msgs = model.msgs || model.collection.msgs;

	console.log(msgs );
	//bus test1 queue channel --------------------------------------
	/*	
	//	console.log();
		console.log(msgs.qChannel.type);
	*/	
	//bus test2 default direct channel------------------------------
			
			msgs.publisher.send('hello world');
	
  //  return what expected by Backbone.sync;
  };  
 
  
  
  
  //Backbone.sync overriding-----------------------------------
  
  Backbone.ajaxSync = Backbone.sync;

  Backbone.getSyncMethod = function(model) {
    if(model.msgs || (model.collection && model.collection.msgs)) {
      return Backbone.Msgs.sync;
    }
    console.log("No msgs reference in the view");
    return Backbone.ajaxSync;
  };


  Backbone.sync = function(method, model, options) {
    return Backbone.getSyncMethod(model).apply(this, [method, model, options]);
  };
  //------------------------------------------
  
  
  
  return Backbone.Msgs;
}));



