require(['Ember', 'asset!index'], function (Ember, indexHtml) {
	// Append the main HTML to the view
	$(indexHtml).appendTo("body");

	var Todos;
	define('Todos', function() {
		return (Todos = Ember.Application.create(););
	});

	// Load the index view into the page.
	require([
		'asset!js/router',
		'asset!js/models/store',
		'asset!js/models/todo',
		'asset!js/controllers/todo_controller',
		'asset!js/controllers/todos_controller',
		'asset!js/views/edit_todo_view'
	],
	function (Router, StoreModel, TodoModel, TodoController, TodosController, EditTodoView) {
		// Configure router.
		Router();

		// Configure models.
		Todos.Store = StoreModel;
		Todos.Todo = TodoModel;

		// Configure controllers.
		Todos.TodoController = TodoController;
		Todos.TodosController = TodosController;

		// Configure view.
		Todos.EditTodoView = EditTodoView;

		// We're ready to launch the app!
		Todos.advanceReadiness();
	});
});
