document.addEventListener("DOMContentLoaded", function(event) {
console.log("readddds")

let curColor = 'purple'


document.getElementById('wrapper').addEventListener('click', function(event){
  event.target.style.background = curColor
})

document.getElementById("colors").addEventListener("click", function(event){
  curColor = event.target.style.background
  document.getElementById('body').style.background = curColor

});
let wrapper = document.getElementById('wrapper');

for(let i = 0; i < 512; i++){
  let loopDiv = document.createElement('div');
  loopDiv.className = 'pixel';
  wrapper.appendChild(loopDiv);
}







});
