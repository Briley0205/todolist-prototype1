const todoForm = document.querySelector("#todo-form")
const writeTodo = todoForm.querySelector("input");
const todoList = document.querySelector("ul");
let lists = [];
const LISTS_KEY = "lists";

function saveLists() {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
}

function removeList(event) {
    const list = event.target.parentElement;
    list.remove();
    lists = lists.filter(toDo => toDo.id !== parseInt(list.id));
    saveLists();
}

function paintTodo(newList) {
    const makeList = document.createElement("li");
    makeList.id = newList.id;
    const span = document.createElement("span");
    const btn = document.createElement("button")
    btn.addEventListener("click", removeList);
    makeList.appendChild(btn);
    btn.innerText = "✖";
    makeList.appendChild(span);
    span.innerText = newList.text;
    todoList.appendChild(makeList);
}

function handleWriteTodo(e) {
    e.preventDefault();
    writeTodo.innerText.fontcolor = "white";
    const newList = writeTodo.value;
    writeTodo.value = "";
    const newListsObj = {
        text: newList,
        id: Date.now(),
    }
    lists.push(newListsObj)
    paintTodo(newListsObj);
    saveLists();
}

todoForm.addEventListener("submit", handleWriteTodo);

const savedLists = localStorage.getItem(LISTS_KEY);

if(savedLists !== null){
    const parsedLists = JSON.parse(savedLists);
    lists = parsedLists;
    parsedLists.forEach(paintTodo);
}