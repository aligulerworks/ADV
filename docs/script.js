"use strict";

// TEMPLATE AREAS
const sprites = document.querySelector(".sprites");
console.log(sprites);

// PAGE RECOGNIZER
// const body = document.querySelector("body");
const getPage = document.querySelector("#page");
const currentPage = () => {
  if (getPage) {
    sprites.innerHTML = `
    <button class="btn-int" id="light-switch">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 271.62 271.62">
        <path id="frame" class="frame"
          d="M231.83,39.72c-53-53-139.14-53-192.11,0s-53,139.14,0,192.11A135.84,135.84,0,1,0,231.83,39.72Z" />
        <path id="moon" class="moon"
          d="M199.6,199.6A87.55,87.55,0,0,1,80.54,204a7.18,7.18,0,0,1-1.21-9.56A474.34,474.34,0,0,1,194.44,79.33,7.17,7.17,0,0,1,204,80.54,87.54,87.54,0,0,1,199.6,199.6ZM142.84,71.54l17.68,6.67-6.68-17.67,6.68-17.68-17.68,6.68-17.68-6.68,6.68,17.68-6.68,17.67ZM70.28,74.87l8.84,3.34-3.34-8.84,3.34-8.83-8.84,3.33-8.83-3.33,3.33,8.83-3.33,8.84ZM74.78,111l3.34-8.84-8.84,3.34-8.84-3.34L63.78,111l-3.34,8.84,8.84-3.34,8.84,3.34Z" />

        <path id="sun" class="sun"
          d="M77.58,52.94a98.43,98.43,0,0,1,40.66-12.57A94.2,94.2,0,0,0,82.48,59.89C77.57,63.79,72.26,56.25,77.58,52.94Zm73.91-8.59A94.13,94.13,0,0,1,190.62,55.7,98.33,98.33,0,0,0,152.92,36,4.27,4.27,0,1,0,151.49,44.35ZM211.41,82a94,94,0,0,1,19.77,35.62A98.3,98.3,0,0,0,218.33,77C215,71.71,207.48,77.08,211.41,82Zm16,68.9a94.13,94.13,0,0,1-11.07,39.21,98.27,98.27,0,0,0,19.46-37.84A4.27,4.27,0,1,0,227.43,150.86ZM190.24,211a94.05,94.05,0,0,1-35.48,20,98.32,98.32,0,0,0,40.48-13.13C200.51,214.54,195.1,207.08,190.24,211Zm-68.79,16.49a94.06,94.06,0,0,1-39.28-10.8,98.48,98.48,0,0,0,38,19.21A4.28,4.28,0,1,0,121.45,227.53ZM40.76,155.42A98.26,98.26,0,0,0,54.17,195.8c3.42,5.26,10.84-.21,6.85-5A93.9,93.9,0,0,1,40.76,155.42Zm3.29-33.33A94,94,0,0,1,54.58,82.73a98.36,98.36,0,0,0-18.94,38.11C34.37,127,43.47,128.33,44.05,122.09ZM192.83,46.7a105.93,105.93,0,0,1,23.08,15.71,108.45,108.45,0,0,0-20-20.49A2.85,2.85,0,1,0,192.83,46.7ZM240.5,151.35a106.3,106.3,0,0,1-4.89,27.49,108.89,108.89,0,0,0,10.5-26.66A2.85,2.85,0,1,0,240.5,151.35ZM142.94,241.4a106,106,0,0,1-27.9,1.07,108.59,108.59,0,0,0,28.29,4.59A2.85,2.85,0,1,0,142.94,241.4ZM28.67,153.66a108.55,108.55,0,0,0,5.6,28.1,2.85,2.85,0,1,0,5.16-2.34A105.79,105.79,0,0,1,28.67,153.66Zm8.67-56.45A106.44,106.44,0,0,1,48.28,71.52,109,109,0,0,0,32.06,95.14,2.85,2.85,0,1,0,37.34,97.21ZM177.51,24.08A119,119,0,0,1,198,32.38a120.76,120.76,0,0,0-19.45-11A1.42,1.42,0,1,0,177.51,24.08ZM218,222.34a118.75,118.75,0,0,1-16.43,14.72,120.55,120.55,0,0,0,18.38-12.66A1.42,1.42,0,1,0,218,222.34ZM15.21,139a120.88,120.88,0,0,0,1.2,22.29,1.42,1.42,0,1,0,2.78-.59A118,118,0,0,1,15.21,139Zm210.09-3.17a89.46,89.46,0,1,1-89.46-89.46A89.46,89.46,0,0,1,225.3,135.84ZM61.62,164.31a80.29,80.29,0,0,1-.77-58.85A82,82,0,0,0,59,165.32,1.42,1.42,0,1,0,61.62,164.31ZM121.74,56.9a80.5,80.5,0,0,1,30.08-.37,81.91,81.91,0,0,0-59.17,9.22,1.42,1.42,0,1,0,1.48,2.42A80.55,80.55,0,0,1,121.74,56.9ZM185.1,198.23a80.29,80.29,0,0,1-55.95,18.24,81.9,81.9,0,0,0,57.7-16A1.41,1.41,0,1,0,185.1,198.23Zm14.45-12.52a81.93,81.93,0,0,0,18.3-57,1.42,1.42,0,1,0-2.82.24,80.32,80.32,0,0,1-15.48,56.78Z" />
      </svg>
    </button>
    <button class="btn-int" id="back-switch">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      
      <circle id="frame-backswitch" class="frame" cx="150" cy="150" r="150"/>
      
      <path class="backswitch" id="cloud" d="M280.89,76.69l-.88.11a23.83,23.83,0,0,0-23.1-3.39,25.33,25.33,0,0,0-38.85-18.19,25.36,25.36,0,0,0-47.54,2.37,23.82,23.82,0,0,0-33.23,20,18.44,18.44,0,0,0-4.3,2.1,16,16,0,0,0-2.61-.23,16.21,16.21,0,0,0,0,32.41,16,16,0,0,0,2.61-.23,18.74,18.74,0,0,0,13.48,2.87,23.79,23.79,0,0,0,30.29-1,25.35,25.35,0,0,0,36.48-.58,25.35,25.35,0,0,0,36.48.58,23.79,23.79,0,0,0,30.29,1,18.74,18.74,0,0,0,13.48-2.87c.53.08,1.06.14,1.6.18A149.53,149.53,0,0,0,280.89,76.69Z"/>
      
      <path class="backswitch" id="mountains" d="M236.14,195.75l-8,8.55,10.28,15.07-46.32-42.85.16-.05a14.57,14.57,0,0,0-17.41,2.92l-16.35,17.42,16.44,24.11L128.6,178.07l.27-.09-33.58-31.5a11.88,11.88,0,0,0-16.78.54L14.77,215A150.21,150.21,0,0,0,122.1,297.4l1.41-1.5,2.29,2.15a150.16,150.16,0,0,0,157.09-78.44l-26.14-24.52A14.57,14.57,0,0,0,236.14,195.75Z"/>
      </svg>
    </button>`;
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

// Mode Changer
let currentMode = "notSet";
const colorMode = () => {
  const nightMode = () => {
    document
      .querySelector(":root")
      .style.setProperty("--back-color", "33,33,33");
    document.querySelector(":root").style.setProperty("--color", "211,211,211");
    document.querySelector(":root").style.setProperty("--shade", "11,11,11");
    moon.style.opacity = "1";
    sun.style.opacity = "0";
    currentMode = "night";
  };
  const dayMode = () => {
    document
      .querySelector(":root")
      .style.setProperty("--back-color", "211,211,211");
    document.querySelector(":root").style.setProperty("--color", "33,33,33");
    document.querySelector(":root").style.setProperty("--shade", "244,244,244");
    moon.style.opacity = "0";
    sun.style.opacity = "1";
    currentMode = "day";
  };

  const autoMode = () => {
    if ((currentMode = "notSet")) {
      if (currentHour < 6 || currentHour > 18) {
        nightMode();
      } else {
        dayMode();
      }
    }
  };

  autoMode();

  const modeChanger = () => {
    if (currentMode === "night") {
      dayMode();
    } else if (currentMode === "day") {
      nightMode();
    }
  };

  lightSwitch.addEventListener("click", modeChanger);
};

// set the current shader
const docBody = document.querySelector("html");

colorMode();

// Light switcher - manual
function manualSwitch() {
  if (colorMode === "day") {
    dayMode();

    console.log("night");
    return "night";
  } else {
    nightMode();

    console.log("day");
    return "day";
  }
}

// //Background Switcher - Random
const backSwitch = document.getElementById("back-switch");
backSwitch.addEventListener("click", backChanger);
backSwitch.addEventListener("pointerover", backgroundToggler);

let currentPicNum;

function backChanger() {
  console.log(`Current Picture Number: ${currentPicNum}`);
  let picCount = Object.keys(backList).length;
  console.log(`Count of pictures are: ${picCount}`);

  const pickOne = function () {
    const picNumber = Math.floor(Math.random() * picCount) + 1;
    currentPicNum = picNumber;
    return picNumber;
  };
  console.log(`Pick one pic numter is ${pickOne()}`);
  document.getElementById("back-image").src = `../images/backs-ali/${
    backList[pickOne()]
  }`;
}

function backgroundToggler() {
  const mainBackground = document.querySelector(".background");
  const wholePageItems = document.querySelector("#page");
  const photoBy = document.querySelector(".photo-by");
  const showBack = () => {
    wholePageItems.style.setProperty("opacity", "1");
    mainBackground.style.setProperty("opacity", "0.33");
    photoBy.style.setProperty("opacity", "0");
  };

  const hideBack = () => {
    wholePageItems.style.setProperty("opacity", "0");
    mainBackground.style.setProperty("opacity", "1");
    photoBy.style.setProperty("opacity", "1");
  };

  backSwitch.addEventListener("pointerleave", showBack, false);
  backSwitch.addEventListener("pointerover", hideBack, false);
}

// Image List Object
let backList = {
  // "1": "aaron-burden-yzgF-AQt1sQ-unsplash.jpg",
  // "2": "annie-spratt--KKLWDAgj2Q-unsplash.jpg",
  // "3": "brian-patrick-tagalog-_8hGFBxWD0A-unsplash.jpg",
  // "4": "frantisek-g-XXuVXLy5gHU-unsplash.jpg",
  // "5": "joe-cooke-MPFiYu__1bA-unsplash.jpg",
  // "6": "martin-sX4lxBWV0-A-unsplash.jpg",
  // "7": "mink-mingle-g0Qdolm3K14-unsplash.jpg",
  // "8": "ritesh-mandaliya-nMvnVSRz-gM-unsplash.jpg",
  // "9": "teemu-paananen-OOE4xAnBhKo-unsplash.jpg",
  // "10": "wesley-tingey-9-OCsKoyQlk-unsplash.jpg",
  // "11": "yiqun-tang-3o7O_6fi7Qc-unsplash.jpg",

  // ALI BACKGROUNDS

  "1": "20170514-142503.webp",
  "2": "20170525-185435.webp",
  "3": "20170528-153955.webp",
  "4": "20170528-154436.webp",
  "5": "20180614-200532.webp",
  "6": "20190804_142539.webp",
  "7": "20190804_143547.webp",
  "8": "20190804_182421.webp",
  "9": "20190806_200842.webp",
  "10": "20190811_121430.webp",
  "12": "20191002_193617.webp",
  "13": "20191013_091504.webp",
  "14": "20191022_121723.webp",
  "15": "20191108_113536.webp",
  "16": "20200205_145218.webp",
  "17": "20200208_091051.webp",
  "18": "20200208_091146.webp",
  "19": "20200208_091357.webp",
  "20": "20200210_173021.webp",
  "21": "20200308_104921.webp",
  "22": "20200308_105621.webp",
  "23": "20200417_180629.webp",
  "24": "20200502_170718.webp",
  "25": "20200503_145137.webp",
  "26": "20200503_145319.webp",
  "27": "20200503_150018.webp",
  "28": "20200503_150030.webp",
  "29": "20200504_130829.webp",
  "30": "20200506_182642.webp",
  "31": "20200506_182703.webp",
  "32": "20200506_185950.webp",
  "33": "20201009_174746.webp",
  "34": "20201222_132115.webp",
};

backChanger();
