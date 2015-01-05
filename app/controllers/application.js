import Ember from 'ember';

export default Ember.ArrayController.extend({
	selected: [],
	myPlaceholder: "Colors",

	actions: {
		selectItem: function(item) {
			this.get('selected').pushObject(item);
		},

		deselectItem: function(item) {
			this.get('selected').removeObject(item);
		}
	}
});
