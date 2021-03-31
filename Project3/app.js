let btn = document.querySelector('#btn');
btn.addEventListener('click',animate);
function animate(){
  var pos=0;
  var elem=document.querySelector('#animation');
  var id = setInterval(frame, 5);
  function frame() {
    if (pos === 358) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}