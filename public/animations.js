// var links = document.getElementsByTagName('.navbar-nav a');

// for (var i = 0; i < links.length; i++) {
//   links[i].onclick = function() {
//     this.style.backgroundColor = "rgba(15, 14, 50, 0.3)";
//   }
// }

// var numOfListItems = document.querySelectorAll(".Tab").length;
// var selected;

// for (var i = 0; i < numOfListItems; i++) {
//   document.querySelectorAll(".Tab")[i].addEventListener("click", function () {
//     selected = this.innerHTML;
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

var numOfPrincipleImages = document.querySelectorAll(".Principle").length;
var principle;
for (var j = 0; j < numOfPrincipleImages; j++) {
  if (j === 0) {
    principle = "Deliver";
  } else if (j === 1) {
    principle = "Cooperate";
  } else if (j === 2) {
    principle = "Trust";
  } else if (j === 3) {
    principle = "Bold";
  } else if (j === 4) {
    principle = "Accountability";
  } else if (j === 5) {
    principle = "Integrity";
  } else if (j === 6) {
    principle = "Systematic";
  } else if (j === 7) {
    principle = "Civility";
  }
  if (j % 2 === 0) {
    document
      .querySelector(".Principle." + principle + " img")
      .classList.add("float-left");
  } else {
    document
      .querySelector(".Principle." + principle + " img")
      .classList.add("float-right");
  }
}
