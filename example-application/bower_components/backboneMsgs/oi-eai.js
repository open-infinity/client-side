/**
 * Backbone localStorage Adapter
 * Version 1.1.6
 *
 * https://github.com/jeromegn/Backbone.localStorage
 */
(function (root, factory) {
   if (typeof exports === 'object' && root.require) {
     module.exports = factory(require("underscore"), require("backbone"));
   } else if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["underscore","backbone"], function(_, Backbone) {
        // Use global variables if the locals are undefined.
        return factory(_ || root._, Backbone || root.Backbone);
      });
   } else {
      // RequireJS isn't being used. Assume underscore and backbone are loaded in <script> tags
      factory(_, Backbone);
   }
}(this, function(_, Backbone) {



	
	
	
	
	bus.transform(function (message) { return message.toUpperCase(); }, { input: 'lowercase', output: 'uppercase' });
	bus.channel('uppercase');
	bus.outboundAdapter(function (str) {
					  console.log(str);
			    }, { input: 'uppercase' });

	bus.send('lowercase', 'hello world'); // 'HELLO WORLD'
	//end bus test
  
  
  
      /*	
	var bus = msgs.bus();
	bus.channel('inbound-to-server-channel');
	bus.channel('outbound-to-client-channel');
	bus.channel('dead-letter-channel');
	bus.channel('invalid-message-channel');
	bus.channel('retry-channel');

    */
  
  
  
  
  
  
  Backbone.ajaxSync = Backbone.sync;

  Backbone.getSyncMethod = function(model) {
    console.log("passa per il via");
    return Backbone.ajaxSync;
  };

  // Override 'Backbone.sync' to default to localSync,
  // the original 'Backbone.sync' is still available in 'Backbone.ajaxSync'
  Backbone.sync = function(method, model, options) {
    //console.log("non synca na minchia");
    return Backbone.getSyncMethod(model).apply(this, [method, model, options]);
  };


}));



