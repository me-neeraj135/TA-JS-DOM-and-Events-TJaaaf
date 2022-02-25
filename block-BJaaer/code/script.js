let form = document.querySelector(`form`);

let userInfo = {};

function handleSubmit(e) {
  e.preventDefault();
  userInfo.name = `Hello ${form.elements.text.value}`;
  userInfo.email = form.elements.email.value;
  console.log(form.elements.gender.value);
  userInfo.color = form.elements.color.value;
  userInfo.Rating = form.elements.rate.value;
  userInfo.bookGenre = `${form.elements.drone.value}`;
  userInfo.terms = `You ${
    form.elements.terms.checked == true ? `agree` : `do not agree`
  } to Terms and Conditions`;
}

form.addEventListener(`submit`, handleSubmit);
