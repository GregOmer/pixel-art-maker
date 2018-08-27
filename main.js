document.addEventListener("DOMContentLoaded", function(event) {
console.log("readddds")

let curColor = 'Navy'


for(let i = 0; i < 900; i++){
  loopDiv = document.createElement("section");
  loopDiv.className = "pixel";
  wrapper.appendChild(loopDiv);
};

let pixels = document.getElementsByClassName('pixel');

document.getElementById("wrapper").addEventListener("click", function(event){
  event.target.style.background = curColor

})

document.getElementById("clearButton").addEventListener("click", function(event){
  for(let i = 0; i < pixels.length; i++){
    pixels[i].style.background = 'white';
  }
})


document.getElementById("colors").addEventListener("click", function(event){
  curColor = event.target.style.background
  document.getElementById("body").style.background = curColor
})

document.getElementById("blackButton").addEventListener("click", function(event){
  for(let i = 0; i < pixels.length; i++){
    pixels[i].style.background = 'black';
  }
})



});
