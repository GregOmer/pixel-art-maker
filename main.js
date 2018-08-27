document.addEventListener("DOMContentLoaded", function(event) {
console.log("readddds")

let curColor = 'purple'
let loopDiv

for(let i = 0; i < 900; i++){
  loopDiv = document.createElement("div");
  loopDiv.Id = "pixel";
  loopDiv.style.background = 'white';
  wrapper.appendChild(loopDiv);
console.log(loopDiv)
};

let pixels = document.getElementById('pixel');

console.log(pixels)

// let canvasBackColor = pixels.style.background;

document.getElementById("wrapper").addEventListener("click", function(event){
  event.target.style.background = curColor
  console.log(event.target.style.background);
})


// clear function---NONFUNCTIONING!!
// document.getElementById("clearButton").addEventListener('click', function(event){
//   canvasBackColor = 'white'
// })


document.getElementById("colors").addEventListener("click", function(event){
  curColor = event.target.style.background
  document.getElementById("body").style.background = curColor

})
document.getElementById('blackButton').addEventListener('click', function(event){
  console.log("blackButton clicked")
   let thing = document.getElementsByTagName('loopDiv')
   console.log(loopDiv);
   thing.style.background = 'black'
  console.log(pixels)

})



})
