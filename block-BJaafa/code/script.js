let body = document.querySelector(`body`);

let div = document.createElement(`div`);
let p = document.createElement(`p`);

let input = prompt(`Enter your name`);
p.innerText = `Hello  ${input} \n  welcome to`;

div.append(p);
body.append(div);
