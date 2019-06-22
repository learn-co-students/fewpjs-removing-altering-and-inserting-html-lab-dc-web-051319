// Write your code here!
var el = document.getElementById('main');
el.remove()

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'Nick is the champion'
document.body.appendChild(newHeader)