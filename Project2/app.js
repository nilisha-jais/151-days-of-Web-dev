let change=document.getElementById("changeColor");

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

change.addEventListener('click',changeColor);
function changeColor(){
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor=rndCol;
}