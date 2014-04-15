define(['Ember', 'DS'], function (Ember, DS) {
	return DS.Model.extend({
		title: DS.attr('string'),
		isCompleted: DS.attr('boolean'),

		todoDidChange: function () {
			Ember.run.once(this, function () {
				this.get('store').commit();
			});
		}.observes('isCompleted', 'title')
	});
});
