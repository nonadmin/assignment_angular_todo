todo.controller('TodoCtrl', ['$scope', '$window', 'todoService', 
  function($scope, $window, todoService){

  $scope.todos = todoService.allTodos();

  $scope.createTodo = function(){
    todoService.createTodo($scope.inputText, $scope.inputDate);
    $scope.inputText = '';
    $scope.inputDate = '';
  };

  $scope.removeTodo = function(todo){
    todoService.removeTodo(todo);
  };

  $scope.removeComplete = function(todo){
    todoService.removeComplete();
  };

}]);