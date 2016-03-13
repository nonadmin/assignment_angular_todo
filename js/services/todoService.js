todo.factory('todoService', function(){

    var _todos = [
    {
      text: "Get groceries from the store",
      dueDate: new Date(),
      completed: false
    },
    {
      text: "Code a ToDo app in Angular",
      dueDate: new Date(),
      completed: false
    },
    {
      text: "Feed Dixie",
      dueDate: new Date(),
      completed: true
    },
    {
      text: "Eat Dinner",
      dueDate: new Date(),
      completed: false
    },
    {
      text: "Gaze into the abyss",
      dueDate: new Date(),
      completed: true
    }
  ];

  var allTodos = function(){
    return _todos;
  };

  var createTodo = function(inputText, inputDate){
    _todos.push({
      text: inputText,
      dueDate: inputDate,
      completed: false
    });

    inputText = '';
    inputDate = '';
  };

  var removeTodo = function(todo){
    var idx = _todos.indexOf(todo);
    _todos.splice(idx, 1);
  };

  var removeComplete = function(){
    for (var i=_todos.length - 1; i>=0; i--){
      if (_todos[i].completed) {
        _todos.splice(i, 1);
      }
    }
  };

  return {
    allTodos: allTodos,
    createTodo: createTodo,
    removeTodo: removeTodo,
    removeComplete: removeComplete
  };

});