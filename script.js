// todo membyuat array yang berisikan object TODO LIST
let todos = [];

let addTodoInput = document.getElementsByClassName("add-todo")[0];

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  let addTodoButton = document.getElementsByClassName("add-todo-button")[0];
  addTodoButton.addEventListener("click", (e) => {
    e.preventDefault();

    addTodo();

    // console.log(todos);
    addTodoInput.reset();
  });
});

function generateRandomID() {
  let randomID = Math.floor(1000 + Math.random() * 9000);
  return randomID;
}

function generateTodoObject(id, task, isComplete) {
  return {
    id,
    task,
    isComplete,
  };
}

// todo Membuat fungsi untuk menambahkan todo ke object TODO LIST

function addTodo() {
  const textTodo = document.getElementsByClassName("add-todo-input")[0].value;

  const generateID = generateRandomID();
  let todoObject = new generateTodoObject(generateID, textTodo, false);

  showError(textTodo, todoObject);
  deleteTodo();
  saveDataTodo();
}

function makeTodo(todoObject) {
  const todoContentsWrapper = document.getElementsByClassName("todo-container-wrapper")[0];

  let createTodoTitle = document.createElement("h2");
  let todoTitle = document.createTextNode(todoObject["task"]);
  createTodoTitle.appendChild(todoTitle);
  createTodoTitle.classList.add("input", "todo-uncompleted");

  // console.log(`Isi Object dari MakeTodo: ${todoObject["task"]}`);

  // *Create Check Icon
  const createCheckIcon = document.createElement("figure");
  const checkIcon = document.createElement("img");
  createCheckIcon.classList.add("check-icon", "check-icon-todo", "display-f");
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

  saveDataTodo();

  return todoContentsWrapper.append(container);
}

textErrorMessageObj = {
  "value kosong": "Value cannot be empty",
  sqlInjection: "value cannot be a special character >:(",
  number: "value cannot be a number only",
};

function showError(error, todoObj, errorMessage) {
  let errorElement = document.getElementsByClassName("show-error-box")[0];
  let errorText = document.getElementsByClassName("error-information-text")[0];
  // console.log(todoObj);

  let isNanValue = isNaN(error);

  errorElement.classList.add("show-err");
  errorElement.style.backgroundColor = "#ff8f8f";
  errorText.style.color = "#1a1a1a";
  console.log(`Error di variabel showError: ${error}`);

  if (error === undefined || error === null || error.length == 0) {
    errorMessage = textErrorMessageObj["value kosong"];
    // console.log(textErrorMessageObj["value kosong"]);
  } else if (typeof error === "number") {
    errorMessage = textErrorMessageObj.number;
    // console.log(errorMessage);
    return errorMessage;
  } else if (isNanValue == false) {
    errorMessage = textErrorMessageObj.number;
    // console.log("Jangan number babe");
  } else {
    makeTodo(todoObj);
    todos.push(todoObj);
    errorMessage = "Ditambahkan";
    errorElement.style.backgroundColor = "#bbe0c6";
    // errorText.style.color = "#b6bebf";
    errorText.innerHTML = errorMessage;
  }

  // setTimeout(() => {
  //   errorElement.classList.remove("show-err");
  // }, 3000);

  errorText.innerHTML = errorMessage;
}

function deleteTodo() {
  let closeIconElements = document.getElementsByClassName("close-icon");
  let checkIconElements = document.querySelectorAll(".check-icon-todo");

  for (let i = 0; i < checkIconElements.length; i++) {
    const checkIconElement = checkIconElements[i];

    checkIconElement.addEventListener("click", () => {
      console.log("tambah class");
      return checkIconElement.classList.add("icon-checked");
    });
  }

  for (let i = 0; i < closeIconElements.length; i++) {
    const closeIconElement = closeIconElements[i];

    closeIconElement.addEventListener("click", () => {
      const elementParent = closeIconElement.parentElement;
      elementParent.style.display = "none";
    });
  }
}

function saveDataTodo() {
  const parsed = JSON.stringify(todos);
  console.log(`What inside var parsed: ${parsed}`);
  localStorage.setItem("STORAGE_KEY", parsed);

  // let cek = localStorage.getItem("STORAGE_KEY");
}
