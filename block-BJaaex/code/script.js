function main() {
  let reset = document.querySelector(`.btn`);
  // grab the div by class selector

  let game = document.querySelector(`.game`);

  // creat the new section with a class of grid

  let grid = document.createElement(`section`);
  grid.classList.add(`grid`);

  // append the grid section to the game div

  game.append(grid);

  // Duplicate array to creat a match for each card

  let gameGrid = cardsArray.concat(cardsArray);

  // count all moves

  let moves = document.querySelector(`.moveCount`);
  let totalMove = 0;

  // to display win message
  let winMsg = document.querySelector(`.winnerDisplay`);
  let totalMatch = 0;

  // Randomize the display of cards

  gameGrid.sort(() => 0.5 - Math.random());

  // store the count and first and second guess
  let previousTarget = null;
  let firstGuess = "";
  let secondGuess = "";
  let count = 0;
  let delay = 1200;

  // creat 12 cards with class card

  gameGrid.forEach(item => {
    // creat a div

    let card = document.createElement(`div`);

    // apply a card class to that div

    card.classList.add(`card`);

    // set the data-name attribute of the div to the cardsArray name

    card.dataset.name = `${item.name}`;
    card.style.backgroundImage = `url(${item.img})`;

    // Creat front of card
    let front = document.createElement(`div`);
    front.classList.add(`front`);
    let back = document.createElement(`div`);
    back.classList.add(`back`);
    back.style.backgroundImage = `url(${item.img})`;

    // append the div to the grid section

    grid.append(card);
    card.append(front);
    card.append(back);
    // card.append(front, back);
  });

  // Add event listener to grid

  grid.addEventListener(`click`, function (event) {
    //  the event target is our clicked item

    let clicked = event.target;
    // console.log(clicked);

    // do not allow the grid section itself to be selected,only select divS inside the grid

    if (
      clicked.nodeName === `SECTION` ||
      clicked === previousTarget ||
      clicked.parentNode.classList.contains(`selected`)
    ) {
      return;
    }

    totalMove = totalMove + 1;
    moves.innerText = `Total-Moves :${totalMove}`;
    // Only allow two cards to be selected at a time

    if (count < 2) {
      count = count + 1;

      // add selected class

      if (count === 1) {
        // assign first guess

        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add(`selected`);
      } else {
        // assign the second guess

        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);

        clicked.parentNode.classList.add(`selected`);
      }

      // if both guesses are not empty

      if (firstGuess !== `` && secondGuess !== ``) {
        // and the first guess matches the second match

        if (firstGuess === secondGuess) {
          // run the match function
          setTimeout(match, delay);
          setTimeout(resetGuesses, delay);
        } else {
          setTimeout(resetGuesses, delay);
        }
      }
      // set previous target to clicked
      previousTarget = clicked;
    }
  });

  //make a function for matching elements and add match css

  let match = () => {
    let selected = document.querySelectorAll(`.selected`);

    selected.forEach(card => {
      card.classList.add(`match`);
    });

    totalMatch += 1;
    console.log(`match  ${totalMatch}`);
    if (totalMatch === 12) {
      winMsg.innerText = `You have Won`;
      totalMove = 0;
      grid.innerHTML = ``;
      reset.classList.add(`reset`);
      reset.addEventListener(`click`, () => {
        location.reload();
      });
    }
  };

  // Reset guess count after 2

  const resetGuesses = () => {
    firstGuess = ``;
    secondGuess = ``;
    count = 0;

    let selected = document.querySelectorAll(`.selected`);
    selected.forEach(card => {
      card.classList.remove(`selected`);
    });
  };
}
main();

// make a function to show win message

// winMsg.innerText = `You have won `;
