// grab the div by class selector

let game = document.querySelector(`.game`);

// creat the new section with a class of grid

let grid = document.createElement(`section`);
grid.classList.add(`grid`);

// append the grid section to the game div

game.append(grid);

// creat 12 cards with class card

cardsArray.forEach(e => {
  let cards = document.createElement(`div`);
  cards.classList.add(`card`);
  grid.append(cards);
});


