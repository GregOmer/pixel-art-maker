document.addEventListener("DOMContentLoaded", function(event) {
console.log("readddds")

let curColor = 'purple'

let pixels = document.getElementById('pixel')

let canvColo = document.getElementById("wrapper").style.background;

console.log()

document.getElementById("wrapper").addEventListener("click", function(event){
  event.target.style.background = curColor
})

// clear function---NONFUNCTIONING!!
// document.getElementById("clearButton").addEventListener('click', function(event){
//   canvColo = white
// })


document.getElementById("colors").addEventListener("click", function(event){
  curColor = event.target.style.background
  document.getElementById("body").style.background = curColor

});

for(let i = 0; i < 512; i++){
  let loopDiv = document.createElement("div");
  loopDiv.Id = "pixel";
  wrapper.appendChild(loopDiv);
}


});
