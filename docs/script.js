"use strict";

// color variabless
// main front and background colors
const blackColor = "33,33,33";
const whiteColor = "211,211,211";

// base shade values for rgba appliances
const shadeBlack = "11,11,11";
const shadeWhite = "244,244,244";

// PAGE RECOGNIZER
const body = document.querySelector("body");
const getPage = document.querySelector("#page");
const currentPage = () => {
  if (getPage.classList.contains("home-page")) {
    console.log(`You're in home page!`);
  } else {
    console.log(`Not working!`);
  }
};

currentPage();
// Switcher Variables
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const lightSwitch = document.querySelector("#light-switch");
const currentHour = new Date().getHours();

// set the current shader

const docBody = document.querySelector("html");

let colorNightMode = () => {
  //assigns main front and background color
  document.querySelector(":root").style.setProperty("--back-color", blackColor);
  document.querySelector(":root").style.setProperty("--color", whiteColor);

  //shades value for rgba appliances
  document.querySelector(":root").style.setProperty("--shade", shadeBlack);

  moon.style.opacity = "1";
  sun.style.opacity = "0";
  return;
};

let colorDayMode = () => {
  document.querySelector(":root").style.setProperty("--back-color", whiteColor);
  document.querySelector(":root").style.setProperty("--color", blackColor);

  document.querySelector(":root").style.setProperty("--shade", shadeWhite);

  moon.style.opacity = "0";
  sun.style.opacity = "1";
  return;
};

//SWITCHERS
// Light switcher -  according to the hour
const colorMode = () => {
  console.log(currentHour);
  if (currentHour < 6 || currentHour > 18) {
    colorNightMode();
  } else {
    colorDayMode();
  }
  lightSwitch.addEventListener("click", modeChanger);
};
colorMode();

// Light switcher - manual
function modeChanger() {
  if (colorMode === "day") {
    colorNightMode();
    moon.style.opacity = "1";
    sun.style.opacity = "0";
    console.log("night");
    return "night";
  } else {
    colorDayMode();
    moon.style.opacity = "0";
    sun.style.opacity = "1";
    console.log("day");
    return "day";
  }
}

// //Background Switcher - Random
const backSwitch = document.getElementById("back-switch");
backSwitch.addEventListener("click", backChanger);

function backChanger() {
  let picCount = Object.keys(backList).length;
  console.log(`Count of pictures are: ${picCount}`);

  const pickOne = function () {
    const picNumber = Math.floor(Math.random() * picCount) + 1;
    return picNumber;
  };
  console.log(pickOne());
  document.getElementById("back-image").src = `./images/unsplash-backgrounds/${
    backList[pickOne()]
  }`;
}

// Image List Object
let backList = {
  "1": "aaron-burden-yzgF-AQt1sQ-unsplash.jpg",
  "2": "annie-spratt--KKLWDAgj2Q-unsplash.jpg",
  "3": "brian-patrick-tagalog-_8hGFBxWD0A-unsplash.jpg",
  "4": "frantisek-g-XXuVXLy5gHU-unsplash.jpg",
  "5": "joe-cooke-MPFiYu__1bA-unsplash.jpg",
  "6": "martin-sX4lxBWV0-A-unsplash.jpg",
  "7": "mink-mingle-g0Qdolm3K14-unsplash.jpg",
  "8": "ritesh-mandaliya-nMvnVSRz-gM-unsplash.jpg",
  "9": "teemu-paananen-OOE4xAnBhKo-unsplash.jpg",
  "10": "wesley-tingey-9-OCsKoyQlk-unsplash.jpg",
  "11": "yiqun-tang-3o7O_6fi7Qc-unsplash.jpg",
};

backChanger();
