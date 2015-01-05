import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'input',
	classNames: ['form-control'],
	classNameBindings: ['inputSize'],
	attributeBindings: ['style'],

	inputSize: 'input-md',
	style: 'display: hidden',

	optionValuePath: null,
	placeholder: null,
	multiple: true,

	didInsertElement: function() {
		var self = this;
		var options = {};

		options.placeholder = self.get('placeholder');
		options.multiple = self.get('multiple');

		options.formatSelection = function(item) {
			return self.formatItemForSelect2(item);
		};

		options.formatResult = function(item) {
			return self.formatItemForSelect2(item);
		};
 
		options.query = function(query) {
			var select2 = this;

			var	filteredContent = self.get('content').reduce(function(results, item) {
				if (select2.matcher(query.term, Ember.get(item, "id"))) {
					results.push(item);
				}

				return results;
			}, [] );

			query.callback({
				results: filteredContent
			});

		};

		self._select = self.$().select2(options);
		self._select.on("select2-selecting", function(e) {
			self.get('selected').pushObject(e.choice);
		});

	},

	formatItemForSelect2: function(item) {
		if (!item) {
			return;
		}

		var text = Ember.get(item, "id");

		return Ember.Handlebars.Utils.escapeExpression(text);
	}
});

