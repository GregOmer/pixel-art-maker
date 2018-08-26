document.addEventListener("DOMContentLoaded", function(event) {
console.log("readddds")

let curColor = 'purple'


for(let i = 0; i < 512; i++){
  let loopDiv = document.createElement("div");
  loopDiv.Id = "pixel";
  loopDiv.style.background = 'white';
  wrapper.appendChild(loopDiv);
};

console.log(document.getElementById('pixel'))


let pixels = document.getElementById('pixel');

// let canvasBackColor = pixels.style.background;

document.getElementById("wrapper").addEventListener("click", function(event){
  event.target.style.background = curColor
})
// console.log(document.getElementById("kghkjsdbg", clearButton))

// clear function---NONFUNCTIONING!!
document.getElementById("clearButton").addEventListener('click', function(event){
  canvasBackColor = 'white'
})


document.getElementById("colors").addEventListener("click", function(event){
  curColor = event.target.style.background
  document.getElementById("body").style.background = curColor

})
document.getElementById('blackButton').addEventListener('click', function(event){
  console.log("blackButton clicked")
  document.getElementsByTagName('loopDiv').style.background = 'black';

})



})
