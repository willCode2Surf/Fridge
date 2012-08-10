var LoginView =  Backbone.View.extend({
	
    initialize: function() {
      _.bindAll(this, 'render');
    },
    template: function() {
		Template.loginPage.events = {
			'click .login': function(event){
				var username = $('#username').val();
				var password = $('#password').val();
				console.log(username + ' ' + password);
				Meteor.loginWithPassword(username, password, function(error){
					console.log(error);
					if (error){
						console.error('login failed');
					} else {
						console.log('login successful');
					}
				});
			}
		};
		return Meteor.ui.render(function() {
	        return Template.loginPage();
	    });
        
    },
    render: function() {
	  $(this.el).html( this.template()  );
	  return this;
    }	
});