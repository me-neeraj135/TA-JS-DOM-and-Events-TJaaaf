let screen = document.getElementById(`screen`);
buttons = document.querySelectorAll(`button`);
let screenValue = ``;

for (item of buttons) {
  item.addEventListener(`click`, e => {
    buttonTxt = e.target.innerText;
    console.log(buttonTxt);

    if (buttonTxt == `X`) {
      buttonTxt = `*`;
      // screenValue = buttonTxt;
      screenValue += buttonTxt;
      screen.value = screenValue;
    } else if (buttonTxt == `C`) {
      screenValue = ``;
      screen.value = screenValue;
    } else if (buttonTxt == `=`) {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonTxt;
      screen.value = screenValue;
    }
  });
}
