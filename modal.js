//Modal for congrats starts

// Get the modal
let modal = document.getElementById("myModal");
let hider = document.getElementById("mymodalname");
let drawed = document.getElementById("draw");
// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let spanname = document.getElementsByClassName("closename")[0];
let closebut = document.getElementsByClassName("drawclose")[0];
// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spanname.onclick = function() {
  hider.style.display = "none"
}
closebut.onclick = () => drawed.style.display = "none";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target === hider) {
    hider.style.display = "none"
  }
}
window.onclick = (event) =>{
  if (event.target === drawed) {
    drawed.style.display = "none"

  }
}
//Modal for congrats ends

//Modal for name alert starts

// Get the modal
// var modall = document.getElementById("myModall");

// // Get the button that opens the modal
// // var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var spann = document.getElementsByClassName("closee")[0];

// // When the user clicks on the button, open the modal
// // btn.onclick = function() {
// //   modal.style.display = "block";
// // }

// // When the user clicks on <span> (x), close the modal
// spann.onclick = function() {
//   modall.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target === modall) {
//     modall.style.display = "none";
//   }
// }