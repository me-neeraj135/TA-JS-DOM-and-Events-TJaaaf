let form = document.querySelector(`form`);
let display = document.querySelector(`.display`);
let p = document.querySelector(`p`);

function handleSubmit(e) {
  e.preventDefault();
  let errorMsg = ``;
  let usernameEle = e.target.elements.username;
  let usernameCorrect = ``;
  let nameEle = e.target.elements.name;
  let nameCorrect = "";
  let mailEle = e.target.elements.mail;
  let mailCorrect = ``;
  let phoneEle = e.target.elements.phone;
  let phoneCorrect = ``;
  let phoneValue = [phoneEle.value];
  let passwordEle = e.target.elements.password;
  let passwordCorrect = ``;
  let confirmPasswordEle = e.target.elements.confirmPassword;
  let confirmPasswordCorrect = ``;

  // validation for username

  if (usernameEle.value.length < 4) {
    errorMsg = `Username can't be less than 4 characters`;
    usernameEle.classList.add(`error`);
    usernameEle.nextElementSibling.innerText = errorMsg;
  } else {
    usernameEle.nextElementSibling.innerText = ``;
    usernameEle.classList.add(`success`);
    usernameEle.classList.remove(`error`);
    usernameCorrect = true;
  }

  // validation for name

  function nameValidation(a) {
    if (a.value.split(``).some(b => Number(b))) {
      errorMsg = `You can't use number in the name field`;
      a.classList.add(`error`);
      a.nextElementSibling.innerText = errorMsg;
    } else if (a.value === ``) {
      errorMsg = `can't be empty`;
      a.classList.add(`error`);
      a.nextElementSibling.innerText = errorMsg;
    } else {
      a.nextElementSibling.innerText = ``;
      a.classList.remove(`error`);
      a.classList.add(`success`);
      nameCorrect = true;
    }
  }
  nameValidation(nameEle);

  // validation for Email

  function mailValidation(a) {
    if (!a.value.includes(`@`)) {
      errorMsg = `Not a valid email`;
      a.classList.add(`error`);
      a.nextElementSibling.innerText = errorMsg;
    } else if (a.value.length < 6) {
      errorMsg = `Email must be at least 6 characters`;
      a.classList.add(`error`);
      a.nextElementSibling.innerText = errorMsg;
    } else {
      a.nextElementSibling.innerText = ``;
      a.classList.add(`success`);
      a.classList.remove(`error`);
      mailCorrect = true;
    }
  }
  mailValidation(mailEle);

  // validation for phone

  function phoneValidation(a) {
    if (!a.every(a => Number(a))) {
      errorMsg = `Phone number can only contain numbers`;
      phoneEle.classList.add(`error`);
      phoneEle.nextElementSibling.innerText = errorMsg;
    } else {
      phoneEle.nextElementSibling.innerText = ``;
      phoneEle.classList.add(`success`);
      phoneEle.classList.remove(`error`);
      phoneCorrect = true;
    }
  }
  phoneValidation(phoneValue);

  // validation for password

  function passwordValidation(a) {
    if (passwordEle.value === ``) {
      errorMsg = `can't be empty`;
      passwordEle.classList.add(`error`);
      passwordEle.nextElementSibling.innerText = errorMsg;
    } else {
      passwordEle.nextElementSibling.innerText = ``;
      passwordEle.classList.add(`success`);
      passwordEle.classList.remove(`error`);
      passwordCorrect = true;
    }
  }
  passwordValidation(passwordEle);

  function confirmPasswordValidation(a) {
    if (a.value !== passwordEle.value) {
      errorMsg = `Password and confirm password must be same`;
      a.classList.add(`error`);
      a.nextElementSibling.innerText = errorMsg;
    } else if (a.value === ``) {
      errorMsg = `can't be empty`;
      a.classList.add(`error`);
      a.nextElementSibling.innerText = errorMsg;
    } else {
      a.nextElementSibling.innerText = ``;
      a.classList.add(`success`);
      a.classList.remove(`error`);
      confirmPasswordCorrect = true;
    }
  }
  confirmPasswordValidation(confirmPasswordEle);
  function successMsg(a, b, c, d, e, f) {
    if (
      usernameCorrect &&
      nameCorrect &&
      mailCorrect &&
      phoneCorrect &&
      passwordCorrect &&
      confirmPasswordCorrect === true
    ) {
      setTimeout(() => {
        alert(`user added successfully`);
      }, 2000);
    }
  }
  successMsg(
    usernameCorrect,
    nameCorrect,
    mailCorrect,
    phoneCorrect,
    passwordCorrect,
    confirmPasswordCorrect
  );
}

form.addEventListener(`submit`, handleSubmit);

// Rules for form validation:

// 1. Username can't be less than 4 characters
// 2. Name can't be numbers
// 3. Email must contain the symbol `@`
// 4. Email must be at least 6 characters
// 5. Phone numbers can only be a number
// 6. Length of phone number can't be less than 7
// 8. Password and confirm password must be same.

// Messages for error:

// 1. `__` can't be less than `__` characters (replace `__` with field name)
// 2. You can't use number in the name field
// 3. Not a valid email
// 4. Phone number can only contain numbers

// Once the form is valid it should alert `User Added Successfully!`
