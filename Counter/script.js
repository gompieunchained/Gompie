let numberDisplayed = document.querySelector('.number');
const lowerCount = document.querySelector('#lowerBtn');
const addCount = document.querySelector('#addCount ');

let count = 0;

addCount.addEventListener('click',add);
lowerCount.addEventListener('click',reduce);


function add (){
  count++;
  numberDisplayed.innerHTML = count;
  
  if (numberDisplayed.innerHTML > '0') { numberDisplayed.style.color = 'black';
  }

  else if (numberDisplayed.innerHTML < '0') {
    numberDisplayed.style.color = 'red';
  }

  }

function reduce (){
  count--;
  numberDisplayed.innerHTML = count;

  if (numberDisplayed.innerHTML > '0') { numberDisplayed.style.color = 'black';
  }

  else if (numberDisplayed.innerHTML < '0') {
    numberDisplayed.style.color = 'red';
  }

  }
