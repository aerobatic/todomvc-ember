define(['DS', 'asset!js/ember-localstorage-adapter'], function (DS) {
	return DS.Store.create({
		revision: 11,
		adapter: DS.LSAdapter.create({
			namespace: 'todos-emberjs'
		})
	});
});
