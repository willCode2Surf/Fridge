
Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
   // Meteor.createUser({username:'test', password:'test'}, {}, function(error){ console.error(error); });
  }
});