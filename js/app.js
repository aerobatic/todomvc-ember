require(['Ember', 'asset!js/Todos'], function (Ember, Todos) {
	// We'll avoid auto-initialization of the app while we manage our
	// dependencies.

	Todos.deferReadiness();

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
