import "./styles.css";
let randomNumber=Math.floor(Math.random() * 10) + 1;

let number=document.getElementById("number");
let submit=document.getElementById("submit");

let ans=document.getElementById("ans");
let guess=document.getElementById("totalGuess");
let status=document.getElementById("status");
let resetButton;
let count=1;

submit.addEventListener('click',checkGuess);

function checkGuess(){
  let userGuess=Number(number.value);
  if(count===0){
   guess.innerText="";
   ans.innerText="";
   status.innerText="";
   count=1;
  }
  else{
  guess.innerText="Total Guesses:"+count++;
if(userGuess===randomNumber){
  ans.innerText="Congratulations !! you got it right";
  ans.style.color='green';
  status.innerText='';
  setGameOver();
}
else if(count===5){
  ans.innerText="Oops Game over!!You used all the lifelines";
  ans.style.color='red';
  status.innerText='';
  setGameOver();
}
else{
  ans.innerText="Wrong Ans!! Try again";
  ans.style.color='red';
  if(userGuess <randomNumber){
    status.innerText="Guess too low";
  }
  else{
    status.innerText="Guess too high";
  }
}
  }
number.value="";
}

function setGameOver(){
  number.disabled=true;
  submit.disabled=true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Reset game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}
function resetGame(){
count=0;
const reset=document.querySelector(".result p");
for (let i = 0 ; i < reset.length ; i++) {
  reset[i].innerText = '';
}
resetButton.parentNode.removeChild(resetButton);
number.disabled=false;
  submit.disabled=false;
  number.value="";
  randomNumber=Math.floor(Math.random() * 10) + 1;
  checkGuess();
}