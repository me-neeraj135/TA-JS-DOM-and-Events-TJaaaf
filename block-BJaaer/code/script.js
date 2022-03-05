let form = document.querySelector(`form`);
let modal = document.querySelector(`.modal_overlay`);

let modalInfo = document.querySelector(`.modal_info`);
modalInfo.style.fontSize = `20px`;

let userData = {};
modal.style.display = `none`;
form.addEventListener(`submit`, event => {
  event.preventDefault();

  let elements = event.target.elements;
  userData.name = elements.name.value;
  userData.email = elements.email.value;
  userData.choice = elements.choice.value;
  userData.color = elements.color.value;
  userData.rate = elements.rate.value;
  userData.book = elements.drone.value;
  userData.terms = elements.terms.checked;
  elements.name.value = ``;
  elements.email.value = ``;
  modal.style.display = `block`;

  let close = document.querySelector(`.modal_close`);
  close.style.fontWeight = `900`;
  close.style.color = `red`;
  close.addEventListener(`click`, () => {
    modal.style.display = `none`;
  });

  displayInfo(userData);
});

function displayInfo(data = {}) {
  modalInfo.innerHTML = ``;
  let h1 = document.createElement(`h1`);
  h1.innerText = `Hello ${data.name}`;
  h1.style.color = `blue`;

  let email = document.createElement(`p`);
  email.innerText = `Email: ${data.email}`;

  let choice = document.createElement(`p`);
  choice.innerText = `Watching choice: ${data.choice}`;

  let color = document.createElement(`p`);
  color.innerText = `color :${data.color}`;

  let rate = document.createElement(`p`);
  rate.innerText = `Rating for movie :${data.rate}`;

  let book = document.createElement(`p`);
  book.innerText = `book: ${data.book}`;

  let terms = document.createElement(`p`);
  terms.innerText = `${
    data.terms === true
      ? `You have accepted the terms and conditions`
      : `You have not accepted the terms and condition`
  }`;

  modalInfo.append(h1, email, choice, color, rate, book, terms);
}
