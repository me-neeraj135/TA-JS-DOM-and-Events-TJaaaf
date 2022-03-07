//  creat ui
let body = document.querySelector(`body`);

let div1 = document.createElement(`div`);
div1.classList.add(`container`);
let h1 = document.createElement(`h1`);
h1.innerText = `Movie Watch List`;

body.append(div1);

let div2 = document.createElement(`div`);
div2.classList.add(`formControl`);
let searchBox = document.createElement(`input`);
searchBox.classList.add(`searchInput`);
searchBox.setAttribute(`type`, `text`);
searchBox.setAttribute(`name`, `findMovie`);
searchBox.placeholder = `Enter the movie name !`;
div2.append(searchBox);
div1.append(h1, div2);

// collect data in array as a object form
let data = [];

// creat ui

let ul = document.createElement(`ul`);

function creatUi(movie) {
  movie.forEach(element => {
    let li = document.createElement(`li`);
    let checkDiv = document.createElement(`div`);
    let inputCheck = document.createElement(`input`);
    inputCheck.type = `checkBox`;
    inputCheck.id = `#`;
    let small = document.createElement(`small`);
    small.innerText = element.name;
    let closeBtn = document.createElement(`button`);
    closeBtn.classList.add(`btn`);
    closeBtn.innerText = `X`;
    checkDiv.append(inputCheck, small);
    li.append(checkDiv, closeBtn);
    ul.prepend(li);
    div1.append(ul);

    function deleteMovie(e) {
      li.remove(``);
    }
    closeBtn.addEventListener(`click`, deleteMovie);
  });
}

function enterMovie(e) {
  if (e.keyCode === 13) {
    if (e.target.value !== ``) {
      let obj = {};
      obj.name = e.target.value;
      //   console.log(obj.name);
      data.push(obj);
      creatUi(data);
      data.pop();
    }
  }
}

searchBox.addEventListener(`keyup`, enterMovie);
