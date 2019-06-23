/*
var element = document.createElement('div');
document.body.appendChild(element);
var ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
};

element.appendChild(ul);

let element2 = document.querySelector("p#greeting");
element2.innerHTML = 'Hello, DOM!';

let header = document.getElementById("div#header");
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

element2.style.backgroundColor = '#27647B';

element2.style.textAlign = 'center';
ul.style.textAlign = 'left'

element2.className = "dog"
element2.className = "pet-listing dog"

element2.classList.remove("this-is-fine");
element2.classList.add("the-room-is-on-fire");

ul.removeChild(ul.querySelector('li:nth-child(2)'));

ul.remove();
*/

main = document.getElementById("main");
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "is the champion";