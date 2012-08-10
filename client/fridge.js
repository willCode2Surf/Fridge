// after the (empty) page is loaded
// views are injected into #content element
Meteor.startup(function () {
	var user = Meteor.user();
	if ( user ){ // user logged in
		console.log( user._id + ' has logged in');
		var AppRouter = Backbone.Router.extend({
		        routes: {
		            "*actions": "getDefaultPage"
		        },
		        getDefaultPage: function( ) {
			 	  new DefaultPageView( 
						{ el: $("#content") }).render();

		        }
		    });
		var router = new AppRouter;
		// start router
	    Backbone.history.start();		
	} else { // user logged out
		console.log('not logged');
		var view = new LoginView({ el: $("#content") });
		view.render();
	}
});
