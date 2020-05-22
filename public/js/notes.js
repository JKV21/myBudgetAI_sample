
//This is the nav bar animation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function(){

        //TOGGLE NAV

        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

    });

}

navSlide();

//This is the loading

let logoAI = document.querySelector('#ATOM');

window.addEventListener('load', function(){
    logoAI.classList.remove('animationAI');
});

//This is the note taking part

//1-Selector

const todoInput = document.querySelector('.Todo-input');
const todoButton = document.querySelector('.Todo-btn');
const todoList = document.querySelector('.Todo-list');
const filterOption = document.querySelector('.filter');
const recicle = document.querySelector('.recicle');

//2-Event Listerers

todoButton.addEventListener('click', function(){

    //Prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('Todo');

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('Todo-item');
    todoDiv.appendChild(newTodo);

    //Checked BTN
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<img class="btn-img" src="PICTURES/checklist.png" alt="Checked">`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Delete BTN
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<img class="btn-img" src="PICTURES/x-button.png" alt="Delete">`;
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //ADD Todo to local storage
    saveLocalTodos(todoInput.value);

    //Cear todo input value
    todoInput.value = '';

});

todoList.addEventListener('click', function(){
    //Delete/Check
    const item = event.target;

    //Delete todo
    if(item.classList[0] === 'delete-btn'){
        const todoParent = item.parentElement;
        //Animation
        todoParent.classList.add('fall');
        todoParent.addEventListener('transitionend', function(){
            todoParent.remove();
        });

        console.log(todoParent.children[0].innerText);

    }

    //Check todo
    if(item.classList[0] === 'complete-btn'){
        const todoParent = item.parentElement;
        todoParent.classList.toggle('completed');
    }

});

recicle.addEventListener('click', function(){
    removeLocalTodos();
})

function saveLocalTodos(todo){

    //Check --- HEY DO I already have the things in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}

document.addEventListener('DOMContentLoaded', getTodos);

function getTodos(){

    //Check---HEY DO I already have the things in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('Todo');

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todo;
    newTodo.classList.add('Todo-item');
    todoDiv.appendChild(newTodo);

    //Checked BTN
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<img class="btn-img" src="PICTURES/checklist.png" alt="Checked">`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Delete BTN
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<img class="btn-img" src="PICTURES/x-button.png" alt="Delete">`;
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //Append to list
    todoList.appendChild(todoDiv);
    });

}

function removeLocalTodos(){

    //Check---HEY DO I already have the things in there?
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    localStorage.removeItem('todos');
    window.location.reload();

}



