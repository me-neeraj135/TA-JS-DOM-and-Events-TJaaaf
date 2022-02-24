/Without Event Deligation/;

let boxOne = document.querySelector(`.boxes1`);
let list = Array.from(boxOne.children);

let boxTwo = document.querySelector(`.boxes2`);
let listTwo = Array.from(boxTwo.children);

list.forEach((a, indx) => {
  a.addEventListener(`click`, e => {
    e.target.innerText = a.dataset.id = indx + 1;
    setTimeout(() => {
      e.target.innerText = "";
    }, 5000);
  });
  //   a.dataset.id = indx + 1;
  //   console.log(a, indx + 1);
});

/with event delegation/;

listTwo.forEach((elm, indx) => {
  elm.dataset.id = indx + 1;
});

function handleClick(e) {
  e.target.innerText = e.target.dataset.id;
  setTimeout(() => {
    e.target.innerText = "";
  }, 5000);
}

boxTwo.addEventListener(`click`, handleClick);
