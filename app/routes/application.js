import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var items = [];

		items.pushObject(Ember.Object.create({id: "red"}));
		items.pushObject(Ember.Object.create({id: "blue"}));
		items.pushObject(Ember.Object.create({id: "pink"}));
		items.pushObject(Ember.Object.create({id: "white"}));


		return items;
	}
});
