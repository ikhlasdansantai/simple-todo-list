const todos = [];

const todoContentsWrapper = document.getElementsByClassName("todo-container-wrapper")[0];
const addTodoInput = document.getElementsByClassName("add-todo")[0];

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
});

document.getElementsByClassName("add-todo-button")[0].addEventListener("click", (e) => {
  e.preventDefault();

  makeTodo();
  todoComplete(todoContainerNya);
  deleteTodo(todoContainerNya);

  console.log(todos);
  addTodoInput.reset();
});

const todoContainerNya = document.querySelectorAll(".todo-container");

function makeTodo(todoDone, deleteTODO) {
  const textTodo = document.getElementsByClassName("add-todo-input")[0];
  let TextTodoValue = textTodo.value;

  if (TextTodoValue === undefined && TextTodoValue === null && TextTodoValue === "" && TextTodoValue === " ") {
    console.log("Gagal");
  } else {
    console.log(`Panjang Value : ${TextTodoValue.length}`);
    // *Create Todo Title

    let createTodoTitle = document.createElement("h2");
    let todoTitle = document.createTextNode(TextTodoValue);

    createTodoTitle.classList.add("input", "todo-uncompleted");
    createTodoTitle.appendChild(todoTitle);

    // *Create Check Icon
    const createCheckIcon = document.createElement("figure");
    const checkIcon = document.createElement("img");
    createCheckIcon.classList.add("check-icon", "display-f");
    checkIcon.setAttribute("src", "images/icon-check.svg");

    createCheckIcon.appendChild(checkIcon);

    // *Create Close Icon
    const createCloseIcon = document.createElement("figure");
    const closeIcon = document.createElement("img");

    createCloseIcon.classList.add("close-icon", "display-f");

    closeIcon.setAttribute("src", "images/icon-cross.svg");

    createCloseIcon.append(closeIcon);

    const container = document.createElement("div");
    container.classList.add("todo-container", "container");

    // *Append Child
    container.append(createCheckIcon);
    container.append(createTodoTitle);
    container.append(createCloseIcon);

    console.log(TextTodoValue);
    todos.push(TextTodoValue);

    return todoContentsWrapper.append(container);
  }
}

function todoComplete(todoContainer) {
  for (let i = 0; i < todoContainer.length; i++) {
    const element = todoContainer[i];
    console.log(element.children[0]);
    console.log(element.children[1]);
    element.children[0].addEventListener("click", () => {
      element.children[0].classList.toggle("checked");
    });
  }
}

todoComplete(todoContainerNya);
deleteTodo(todoContainerNya);

function deleteTodo(todoContainer) {
  for (let i = 0; i < todoContainer.length; i++) {
    const element = todoContainer[i];
    console.log(element.children[0]);
    console.log(element.children[1]);
    element.children[2].addEventListener("click", () => {
      element.style.display = "none";
    });
  }
}

console.log(todos);

function showErr() {}

function removeTodo() {}

// console.log(createObject("todoTitles"));

// for (let i = 0; i < todoContainerNya.length; i++) {
//   const element = todoContainerNya[i];
//   console.log(`Hpus ${element}`);
// }
