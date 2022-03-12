let body = document.querySelector(`body`);

let mainBox = document.createElement(`div`);
mainBox.classList.add(`container`);
let h1 = document.createElement(`h1`);
h1.innerText = `todoS`;
let root = document.createElement(`ul`);
// append h1 into mainBox
mainBox.append(h1);
let div = document.createElement(`div`);
div.classList.add(`inputTextDiv`);

// creat scroll-down button and input text field
let showAll = document.createElement(`label`);
showAll.innerText = `>`;
showAll.classList.add(`showAll`);

//  input todo field

let textInput = document.createElement(`input`);
textInput.type = `text`;
textInput.placeholder = `What needs to be done?`;
textInput.classList.add(`new-todo`);
div.append(showAll, textInput);
mainBox.append(div, root);
body.append(mainBox);

// creat footer

let footer = document.createElement(`footer`);
let footerUl = document.createElement(`ul`);
footerUl.classList.add(`footerUl`);

// ************ item left button

let itemLeft = document.createElement(`li`);
itemLeft.innerText = `Item left`;
let liTw = document.createElement(`li`);
let allBtn = document.createElement(`button`);
let liA2 = document.createElement(`a`);
liA2.innerText = `All`;
allBtn.append(liA2);
liTw.append(allBtn);

// Active button********

let liTh = document.createElement(`li`);
let activeBtn = document.createElement(`button`);
let liA3 = document.createElement(`a`);
activeBtn.append(liA3);
liTh.append(activeBtn);
liA3.innerText = `Active`;

//Completed Button......

let liFo = document.createElement(`li`);
let completeBtn = document.createElement(`button`);
let liA4 = document.createElement(`a`);
liA4.innerText = `Completed`;
completeBtn.append(liA4);
liFo.append(completeBtn);

// ********************Clear Completed Button

let liFi = document.createElement(`li`);
let completeClearBtn = document.createElement(`button`);
let liA5 = document.createElement(`a`);
liA5.innerText = `Clear completed`;

completeClearBtn.append(liA5);
liFi.append(completeClearBtn);
footerUl.append(itemLeft, liTw, liTh, liFo, liFi);
mainBox.append(footerUl);

// creat an array to store all data as an object form

let allData = JSON.parse(localStorage.getItem(`todoS`)) || [];

// creat handleInput function *********

function handleInputText(event) {
  let inputValue = event.target.value;
  if (event.keyCode === 13 && event.target.value !== ``) {
    let data = {};
    data.name = inputValue;
    data.isDone = false;
    allData.push(data);
    localStorage.setItem(`todoS`, JSON.stringify(allData));
    creatUi(allData);
    event.target.value = ``;
  }
}

// creat todo-delete function

function handleDelete(e) {
  let id = e.target.dataset.id;
  allData.splice(id, 1);
  localStorage.setItem(`todoS`, JSON.stringify(allData));
  itemLeft.innerText = `${allData.length}  Item left`;
  creatUi(allData);
}

//  creat handle toggle function

function handleToggle(e) {
  let id = e.target.dataset.id;
  allData[id].isDone = !allData[id].isDone;
  localStorage.setItem(`todoS`, JSON.stringify(allData));
  creatUi(allData);
}

// display all todo

function displayAllTodo(e) {
  creatUi(allData);
}

// find active todo

function handleActive(event) {
  let activeTodo = allData.filter(elm => elm.isDone === false);
  creatUi(activeTodo);
  console.log(activeTodo);
}

//  find completed todo

function completedTodo(event) {
  let completeTodo = allData.filter(elm => elm.isDone === true);
  creatUi(completeTodo);
  console.log(completeTodo);
}

//  creat function to clear completed todo

function clearCompleted(event) {
  let clearComplete = allData.filter(elm => elm.isDone === true);
  localStorage.setItem(`todoS`, JSON.stringify(clearComplete));
  console.log(clearComplete);
}

// creat ui function

function creatUi(dataInfo) {
  root.innerHTML = ``;
  allData.forEach((elm, index) => {
    let li = document.createElement(`li`);
    let checkInput = document.createElement(`input`);
    checkInput.classList.add(`checkBox`);
    checkInput.type = `checkbox`;
    checkInput.setAttribute(`data-id`, index);
    checkInput.checked = elm.isDone;

    checkInput.addEventListener(`input`, handleToggle);

    let p = document.createElement(`p`);

    p.innerText = elm.name;

    if (checkInput.checked === true) {
      p.classList.add(`lineThrough`);
    }

    let closeBtn = document.createElement(`button`);
    closeBtn.innerText = `X`;
    closeBtn.classList.add(`close`);
    closeBtn.setAttribute(`data-id`, index);

    closeBtn.addEventListener(`click`, handleDelete);

    li.append(checkInput, p, closeBtn);
    root.append(li);
    itemLeft.innerText = `${allData.length} Item left`;
  });
}

textInput.addEventListener(`keyup`, handleInputText);
activeBtn.addEventListener(`click`, handleActive);
completeBtn.addEventListener(`click`, completedTodo);
completeClearBtn.addEventListener(`click`, clearCompleted);
allBtn.addEventListener(`click`, displayAllTodo);

// liBtn3.addEventListener(`click`, handleActive);

//  <ul>
//    <li style="display: flex">
//      <input type="checkbox" />
//      <p>add todo</p>
//      <button>X</button>
//    </li>
//  </ul>;
