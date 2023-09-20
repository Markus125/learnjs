//console.log(window, document);
let title = document.getElementById('title');
console.log({title});

setTimeout(() => {
    title.innerText = 'Goodbye Js';
    title.style.background = 'coral'
}, 2000)
let r, g ,b;
setInterval(() => {
r = Math.round (Math.random() * 255);
g = Math.round (Math.random() * 255);
b = Math.round (Math.random() * 255);
title.style.background = `rgb(${r}, ${g}, ${b})`;
if(title.classList.contains('green')) {
    title.classList.replace('red', 'green');
}
}, 0);

let textinput = document.querySelector('#textinput');
textinput.addEventListener('change', evt => {
    console.log(evt);
    title.innerText = textinput.ariaValueMax.split('').reverse().join();
});