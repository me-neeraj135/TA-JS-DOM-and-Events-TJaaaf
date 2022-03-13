let body = document.querySelector(`body`);

let mainBox = document.createElement(`div`);
mainBox.classList.add(`container`);
let h1 = document.createElement(`h1`);
h1.innerText = `todoS`;
let ulRoot = document.createElement(`ul`);
// append h1 into mainBox
mainBox.append(h1);
let div = document.createElement(`div`);
div.classList.add(`inputTextDiv`);

//  input todo field

let textInput = document.createElement(`input`);
textInput.type = `text`;
textInput.placeholder = `What needs to be done?`;
textInput.classList.add(`new-todo`);
div.append(textInput);
mainBox.append(div, ulRoot);
body.append(mainBox);

// creat footer....

let footer = document.createElement(`footer`);
let footerUl = document.createElement(`ul`);
footerUl.classList.add(`footerUl`);

//  store data in an array of object

let allData = JSON.parse(localStorage.getItem(`todoS`)) || [];

//item left button.....

let itemLeft = document.createElement(`span`);
itemLeft.innerText = `${allData.length} Left Item`;
footerUl.append(itemLeft);

// all Button...

let all = document.createElement(`button`);
all.classList.add(`all`);
all.innerText = `All`;
footerUl.append(all);

// Active button......

let active = document.createElement(`button`);
active.classList.add(`active`);
active.innerText = `Active`;
footerUl.append(active);

//Completed Button......

let complete = document.createElement(`button`);
complete.classList.add(`complete`);
complete.innerText = `Completed`;
footerUl.append(complete);

//Clear Completed Button.....

let clearCompleted = document.createElement(`button`);
clearCompleted.classList.add(`clear-completed`);
clearCompleted.innerText = `Clear Completed`;
footerUl.append(clearCompleted);

mainBox.append(footerUl);

// creat ui

function creatUi(data = allData) {
  ulRoot.innerHTML = ``;
  allData.forEach((elm, index) => {
    let li = document.createElement(`li`);
    let checkBox = document.createElement(`input`);
    checkBox.type = `checkbox`;
    checkBox.setAttribute(`data-id`, index);
    checkBox.classList.add(`checkBox`);

    checkBox.addEventListener(`input`, e => {
      let id = e.target.dataset.id;
      allData[id].isDone = !allData[id].isDone;
      creatUi();
    });

    let p = document.createElement(`p`);
    p.innerText = elm.text;
    p.setAttribute(`data-id`, index);

    if (elm.isDone === true) {
      p.classList.add(`lineThrough`);
    }

    let closeBtn = document.createElement(`button`);
    closeBtn.classList.add(`close`);
    closeBtn.innerText = `X`;
    closeBtn.setAttribute(`data-id`, index);

    closeBtn.addEventListener(`click`, handleClose);
    itemLeft.innerText = `${allData.length} Left Item`;

    li.append(checkBox, p, closeBtn);
    ulRoot.append(li);
  });
}

// Input todo

function handleInputValue(event) {
  inputValue = event.target.value;
  if (event.keyCode === 13 && event.target.value !== ``) {
    console.log(event.keyCode);
    let data = {
      text: inputValue,
      isDone: false,
    };
    allData.push(data);

    creatUi();
    // console.log(allData);

    event.target.value = ``;
    localStorage.setItem(`todoS`, JSON.stringify(allData));
  }
}
//  close todo
function handleClose(e) {
  let id = e.target.dataset.id;
  allData.splice(id, 1);
  localStorage.setItem(`todoS`, JSON.stringify(allData));
  creatUi();
  itemLeft.innerText = `${allData.length} Left Item`;
}

// Display all todo

function displayAll(e) {
  creatUi(allData);
  console.log(allData);
}

//  display only Active todo

function handleActive(e) {
  allData = allData.filter(elm => elm.isDone === false);
  localStorage.setItem(`todoS`, JSON.stringify(allData));

  creatUi();
  itemLeft.innerText = `${activeTodo.length} Item Left`;
  console.log(allData);
}

// display completed todo

function handleCompleted(event) {
  allData = allData.filter(element => element.isDone === true);

  localStorage.setItem(`todoS`, JSON.stringify(allData));
  creatUi();

  console.log(allData);
}

// clear completed todo

function handleClear(e) {
  allData = allData.filter(elm => !elm.isDone);
  console.log(allData);

  localStorage.setItem(`todoS`, JSON.stringify(allData));
  creatUi();
  itemLeft.innerText = `${allData.length} Item Left`;
}

textInput.addEventListener(`keyup`, handleInputValue);
all.addEventListener(`click`, displayAll);
active.addEventListener(`click`, handleActive);
complete.addEventListener(`click`, handleCompleted);
clearCompleted.addEventListener(`click`, handleClear);
