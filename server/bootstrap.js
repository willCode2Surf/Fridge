
Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    Meteor.users.insert({name: 'test', password: 'test'});
  }
});