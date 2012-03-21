// AsyncLoader.js 0.5.3
// (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://documentcloud.github.com/backbone
(function(document) {

	var AsyncLoader = function() {

		// Init Loader
		this.init() ;

	} ;


	AsyncLoader.prototype.init = function() {

		alert('yep') ;

	}



	window.asyncLoader = new AsyncLoader() ;

})(document) ;