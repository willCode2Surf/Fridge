// after the (empty) page is loaded
// views are injected into #content element
Meteor.startup(function () {
	var user = Meteor.user();
	if ( user ){ // user logged in
		console.log( user.name + ' has logged in');
		
	} else { // user logged out
		console.log('not logged');
		var view = new LoginView({ el: $("#content") });
		view.render();
	}
});
