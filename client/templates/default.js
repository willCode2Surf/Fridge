var DefaultPageView =  Backbone.View.extend({
	
    initialize: function() {
      _.bindAll(this, 'render');
    },
    template: function() {
		return Meteor.ui.render(function() {
	        return Template.defaultPage();
	    });
        
    },
    render: function() {
	  $(this.el).html( this.template()  );
	  return this;
    }	
});