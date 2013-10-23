/*global define*/
define([
	'jquery',
	'backbone',
	'common'
], function ($, Backbone, Common) {
	'use strict';

	function Prova(){
	
	   this.ms = "cazzo";
	
	}
	
	
	Prova.prototype ={
	  
	  pr: function pr(){
	    console.log(this.ms());
	    
	  }
	    
	};
	
	
	return new Prova();
});
