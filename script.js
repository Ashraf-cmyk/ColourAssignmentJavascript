//NavBar //////////////////////////////////////////////////////

let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "300px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    toggleNavStatus = false;
  }
};

//RadioButtons //////////////////////////////////////////////////////

let myFunctionRed = function () {
  document.body.style.backgroundColor = "red";
  toggleNav();
};

function myFunctionGreen() {
  document.body.style.backgroundColor = "green";
  toggleNav();
}

function myFunctionYellow() {
  document.body.style.backgroundColor = "yellow";
  toggleNav();
}

function myFunctionBlue() {
  document.body.style.backgroundColor = "blue";
  toggleNav();
}

//KeyPress //////////////////////////////////////////////////////

let colorRed = "red";
let colorGreen = "Green";
let colorYellow = "Yellow";
let colorBlue = "Blue";
let textChosen = document.querySelector(".chosen_text");

const KeyPress = function (key, backgroundColor, innerText) {
  window.addEventListener("keydown", (event) => {
    if (event.key === key) {
      document.body.style.backgroundColor = backgroundColor;
      textChosen.innerText = innerText;
      event.target.style.color = backgroundColor;
    }
  });
};

KeyPress("1", colorRed, "Red");
KeyPress("2", colorGreen, "Green");
KeyPress("3", colorYellow, "Yellow");
KeyPress("4", colorBlue, "Blue");
