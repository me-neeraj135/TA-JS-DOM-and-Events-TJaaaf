let one = document.querySelector(`.first`);
let two = document.querySelector(`.second`);

function generateRandomColor() {
  let hexValue = [
    `0`,
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
  ];
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color = color + hexValue[randomNum];
  }

  return color;
}

// console.log(generateRandomColor());

function handleClick() {
  let randomColor = generateRandomColor();

  one.style.backgroundColor = randomColor;
}

function onMousemove() {
  let randomColor = generateRandomColor();

  two.style.backgroundColor = randomColor;
}

one.addEventListener(`click`, handleClick);
two.addEventListener(`mousemove`, onMousemove);

