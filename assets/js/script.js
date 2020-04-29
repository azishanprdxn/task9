// Javascript here
'use strict';
var text = document.getElementById('start-stop');

var tasks = [ // Stores all the task in array
  document.getElementById('task-1'),
  document.getElementById('task-2'),
  document.getElementById('task-3'),
  document.getElementById('task-4'),
  document.getElementById('task-5')
];
var tasksLength = tasks.length;

// Get all the element with drop-area class name
var dropArea = document.getElementsByClassName('drop-area');
var dropAreaLength = dropArea.length;

// Calls when Start is Clicked
function startDrag() {
  text.innerHTML = 'Stop';
  text.onclick = stopDrag;
  // Setting attributes when start is called
  for (var i = 0; i < tasksLength; i++) {
    tasks[i].setAttribute('draggable', 'true');
    tasks[i].setAttribute('class', 'item');
    tasks[i].style.cursor = 'grab';
    tasks[i].setAttribute('ondragstart', 'drag(event)');
  }
  for (var i = 0; i < dropAreaLength; i++) {
    dropArea[i].setAttribute('ondragover', 'allowDrop(event)');
    dropArea[i].setAttribute('ondrop', 'drop(event)');
  }
}

// Calls when Stop is Clicked
function stopDrag() {
  text.innerHTML = 'Start';
  text.onclick = startDrag;
  // Removing attributes when stop is called
  for (var i = 0; i < tasksLength; i++) {
    tasks[i].removeAttribute('draggable');
    tasks[i].removeAttribute('class');
    tasks[i].style.cursor = 'text';
    tasks[i].removeAttribute('ondragstart');
  }
  for (var i = 0; i < dropAreaLength; i++) {
    dropArea[i].removeAttribute('ondragover');
    dropArea[i].removeAttribute('ondrop');
  }
}

// Allow Drop Event
function allowDrop(event) {
  if (event.target.className == 'drop-area') {
    event.preventDefault();
  }
}

// Drag Event
function drag(event) {
  event.dataTransfer.setData('items', event.target.id);
}

// Drop Event
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData('items');
  if (event.target.className == 'drop-area') {
    event.target.appendChild(document.getElementById(data));
  }
}

// Calls when Restart is Clicked
function restart() {
  document.location.reload();
}