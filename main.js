document.addEventListener("DOMContentLoaded", function(event) {
console.log("readddds")

let curColor = 'red'

document.getElementById("wrapper").addEventListener("click", function(event) {
  event.target.style.background = curColor
});
document.getElementById("colors").addEventListener("click", function(event) {
  curColor = event.target.style.background
  console.log(curColor)
});
document.getElementsByClassName("redPaint")[0].addEventListener("click", function(event) {



console.log(event.target.classList[0].background)

});
});
