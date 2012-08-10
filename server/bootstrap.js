
Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
	// test user: username=test, password=test
     Meteor.users.insert(
			{ "services" : { "password" : 
								{ "srp" : { "identity" : "2f76a1b7-0f79-4763-896a-da7c2313c8de", 
								            "salt" : "04960357-1c0f-4b24-8b9f-6d220baab86b", 
								            "verifier" : "daa7f7e38028a29033753bb8d2e3e15ac40a7f85a89041c2ce1d4177c05ea37752d8cdc7994222c492b9b4cad42d35ebfb9ec7ac7b1c16a8f1ccc77711d7c6157cb10460a3f9ac98e3fd514218a78117551e7f542e330fe1e5736139764831a893bdd9b7e813899ae85a5a9067b63d74e4b2930bcac90198a2c7bb7760d40641" 
								          } 
								} 
						  }, "username" : "test",  });
  }
});