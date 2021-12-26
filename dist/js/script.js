function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// ---------------------------------------------------------------------------

const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = [
   'yellow', 
   'orange', 
   'purple', 
   'blue', 
   'red', 
   'brown', 
   'pink', 
   '#fff', 
   '#f1f2f3'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div');
   square.classList.add('square');

   square.addEventListener('mouseover', () => {
      setColor(square);
   })

   square.addEventListener('mouseleave', () => {
      removeColor(square);
   })

   board.append(square);
}

function setColor(element) {
   const color = getRandomColor();
   element.style.backgroundColor = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d';
   element.style.boxShadow = 'none';
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index];
}

