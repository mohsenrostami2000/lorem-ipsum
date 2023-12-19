import {text} from "./array.js";
// My code with click event ---------------------------------------------

// const input = document.getElementById('amount');
// const btn = document.querySelector('.btn');
// const loremText = document.querySelector('.lorem-text');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const random = Math.floor(Math.random() * text.length);
//   if(input.value < 0 || input.value > 9){
//     loremText.innerHTML = `<p>${text[random]}`; 
//   } else {
//     loremText.innerHTML = `<p>${text[input.value]}`;
//   }

//   if(!input.value){
//     alert('Oops! you need to put some number in me!');
//     loremText.innerHTML = `<article class="lorem-text"> </article>`;
//   }
// })

// ----------------------------------------------------------------------

// John sligma code -----------------------------------------------------

const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = parseInt(amount.value);

  if(isNaN(value) || value <= 0 || value > 9){
    const random = Math.floor(Math.random () * text.length);
    result.innerHTML = `<p class="result">${text[random]}</p>`
  } else // to make value paragraph 
  {
    let tempText = text.slice(0, value);
    tempText = tempText.map((item) => {
      return `<p class="result">${item}</p>`
    }).join("");

    result.innerHTML = tempText
  }
});



