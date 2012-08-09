var LoginView =  Backbone.View.extend({
	
    initialize: function() {
      _.bindAll(this, 'render');
    },
    template: function() {
        return Template.loginPage();
    },
    render: function() {
	  $(this.el).html( this.template()  );
	  return this;
    }	
});