todo.filter('filterCompleted', function(){

  return function( todos, hide ){
    if ( !(hide) ){ return todos; }

    var completed = [];

    todos.forEach(function(todo){
      if ( !(todo.completed) ){
        completed.push(todo);
      }
    });

    return completed;
  };

});