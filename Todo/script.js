var form = document.querySelector('form');
var toDoList = document.querySelector('ul');
var button = document.querySelector('#clear');
var input = document.querySelector('#inputToDo');
//var todosArray = [];
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));
var storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', function(e) {
  e.preventDefault();
  todosArray.push(input.value);
  localStorage.setItem('todos', JSON.stringify(todosArray));
toDoMaker(input.value);
input.value = '';
});


var toDoMaker =  function(text) {
  var todo = document.createElement('li');
todo.textContent = text;
toDoList.appendChild(todo);
}
for (var i = 0; i < storage.length; i++) {
  toDoMaker(storage[i]);
}
button.addEventListener('click', function () {
  localStorage.clear();
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
});

var box = document.querySelector('box');
var newList = document.querySelector('#newList');
