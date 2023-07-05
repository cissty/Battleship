const grid = document.getElementById('grid-box');
const storedUserName = localStorage.getItem('username')
const greet = document.querySelector('h2');
const userName = firstLetterUpper(storedUserName);
const footer = document.querySelector('footer')
const title = document.getElementById('title')
const readyBut = document.getElementById('ready-button')

greet.textContent = `Hello ${userName}`

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const element = document.createElement('div');
      grid.appendChild(element);
    }
  }

  function firstLetterUpper(string){
    const store = string.split('')
    const firstChar = store[0].toUpperCase();
    store[0] = firstChar;
    return store.join('');
}

footer.setAttribute('style', 'filter: blur(2px)')
title.setAttribute('style', 'filter: blur(2px)')


function startGame(){
    footer.setAttribute('style', 'filter: blur(0px)')
    title.setAttribute('style', 'filter: blur(0px)')
}

readyBut.addEventListener('click', startGame);
//ready button will throw error if ships not placed