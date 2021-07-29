const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const text = document.querySelector('p').textContent;
var btn_boo = true;
const ogAuthor = author.textContent;
// var str = 

btn_toggle.onclick = () => {
  // your code here
  const bobo = 630610756 - length.value;
  console.log(text[0])
  if(btn_boo == true){
    author.textContent = bobo;
    btn_boo = false;
    btn_toggle.textContent = "Display Author";
  }else{
    author.textContent = ogAuthor;
    btn_boo = true;
    btn_toggle.textContent = "Display Calculation";
  }
}



// more codes for Search and Reset buttons here
