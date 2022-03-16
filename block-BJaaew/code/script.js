let body = document.querySelector(`body`);
let rootUl = document.createElement(`ul`);
rootUl.classList.add(`rootUl`);

let mainBox = document.createElement(`div`);
mainBox.classList.add(`container`);

let headingBox = document.createElement(`div`);
headingBox.classList.add(`headingBox`);

let h1 = document.createElement(`h1`);
h1.innerText = `People  of GOT`;

// filter all people and store in a  new variable

let peopleName = got.houses
  .reduce((acc, cv) => {
    acc.push(
      cv.people.filter(elm => {
        return elm;
      })
    );
    return acc;
  }, [])
  .flat(Infinity);

// creat search Box to find the Characters

let searchBox = document.createElement(`input`);
searchBox.classList.add(`searchBox`);
searchBox.type = `text`;
searchBox.placeholder = `Search the people of GOT`;
headingBox.append(h1, searchBox);
mainBox.append(headingBox);
body.append(mainBox);

searchBox.addEventListener(`input`, e => {
  console.log(e.target.value);
  let searchName = peopleName.filter(p => p.name.includes(e.target.value));
  creatUi(searchName);
});

// creat ui of people's name ,image and description

function creatUi(data) {
  rootUl.innerHTML = "";
  data.forEach((elm, ind) => {
    let li = document.createElement(`li`);
    let imgNameBox = document.createElement(`div`);
    imgNameBox.classList.add(`imgNmBox`);

    let imgBox = document.createElement(`div`);
    imgBox.classList.add(`imgBox`);

    let img = document.createElement(`img`);
    img.src = `${elm.image}`;
    img.classList.add(`image`);

    imgBox.append(img);

    let peopleNameDiv = document.createElement(`div`);
    peopleNameDiv.classList.add(`peopleNameDiv`);
    let peopleNameSpan = document.createElement(`span`);
    peopleNameSpan.innerText = `${elm.name}`;

    peopleNameDiv.append(peopleNameSpan);

    imgNameBox.append(imgBox, peopleNameDiv);

    let p = document.createElement(`p`);
    p.classList.add(`descriptionBox`);
    p.innerText = `${elm.description}`;
    let btn = document.createElement(`button`);
    btn.classList.add(`learnBtn`);
    let aTag = document.createElement(`a`);
    aTag.innerText = `Learn More`;
    btn.append(aTag);
    li.append(imgNameBox, p, btn);
    rootUl.append(li);
  });
}

//

// creat list of house name

let houseListUl = document.createElement(`ul`);
houseListUl.classList.add(`houseUl`);
mainBox.append(houseListUl, rootUl);

function creatHouseName(data) {
  data.houses.map(elm => {
    let houseBtn = document.createElement(`button`);
    houseBtn.classList.add(`houseBtn`);

    houseBtn.append(elm.name);
    houseListUl.append(houseBtn);

    houseBtn.addEventListener(`click`, (e, index) => {
      let houseName = elm.people;
      console.log(houseName);
      creatUi(houseName);
    });
  });
}
creatHouseName(got);
creatUi(peopleName);
