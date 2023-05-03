"use strict";

// GLOBAL VARIABLES & FUNCTIONS
// PAGE RECOGNIZER
// const body = document.querySelector("body");
const getPage = document.querySelector(".page");
let pageID;
const currentPage = () => {
  if (getPage.id === "page-home") {
    console.log(`This is Home`);
    pageID = "home";
  } else if (getPage.id === "page-about") {
    console.log(`About Page!`);
    pageID = "about";
  } else if (getPage.id === "page-contact") {
    console.log("Contact Page!");
    pageID = "contact";
  } else if (getPage.id === "page-read") {
    console.log(`One Read Page!`);
    pageID = "read";
  }
  return pageID;
};

// DIRECTORY FIXER
let styleDirectory;
let homeDirectory;
if (currentPage() === "home") {
  styleDirectory = `./`;
} else {
  styleDirectory = `../`;
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM loaded");

  //wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {
      // PAGE MODULES

      const headElement = document.querySelector("head");

      // TEMPLATE AREAS
      const sprites = document.querySelector(".sprites");
      console.log(sprites);

      currentPage();

      // Switcher Variables
      const moon = document.querySelector("#moon");
      const sun = document.querySelector("#sun");
      const lightSwitch = document.querySelector("#light-switch");
      const currentHour = new Date().getHours();

      // Mode Changer
      let currentMode;
      const colorMode = () => {
        const nightMode = () => {
          document
            .querySelector(":root")
            .style.setProperty("--back-color", "22,22,22");
          document
            .querySelector(":root")
            .style.setProperty("--color", "211,211,211");
          document
            .querySelector(":root")
            .style.setProperty("--shade", "11,11,11");
          moon.style.opacity = "1";
          sun.style.opacity = "0";
          currentMode = "night";
        };
        const dayMode = () => {
          document
            .querySelector(":root")
            .style.setProperty("--back-color", "211,211,211");
          document
            .querySelector(":root")
            .style.setProperty("--color", "22,22,22");
          document
            .querySelector(":root")
            .style.setProperty("--shade", "244,244,244");
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
        document.getElementById(
          "back-image"
        ).src = `${styleDirectory}images/backs-ali/${backList[pickOne()]}`;
      }

      function backgroundToggler() {
        const mainBackground = document.querySelector(".background");
        const wholePageItems = document.querySelector(".page");
        const footer = document.querySelector("footer");
        const photoBy = document.querySelector(".photo-by");
        const showBack = () => {
          wholePageItems.style.setProperty("opacity", "1");
          mainBackground.style.setProperty("opacity", "0.33");
          footer.style.setProperty("opacity", "1");
          photoBy.style.setProperty("opacity", "0");
        };

        const hideBack = () => {
          wholePageItems.style.setProperty("opacity", "0");
          mainBackground.style.setProperty("opacity", "1");
          footer.style.setProperty("opacity", "0");

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
        "11": "20191002_193617.webp",
        "12": "20191013_091504.webp",
        "13": "20191022_121723.webp",
        "14": "20191108_113536.webp",
        "15": "20200205_145218.webp",
        "16": "20200208_091051.webp",
        "17": "20200208_091146.webp",
        "18": "20200208_091357.webp",
        "19": "20200210_173021.webp",
        "20": "20200308_104921.webp",
        "21": "20200308_105621.webp",
        "22": "20200417_180629.webp",
        "23": "20200502_170718.webp",
        "24": "20200503_145137.webp",
        "25": "20200503_145319.webp",
        "26": "20200503_150018.webp",
        "27": "20200503_150030.webp",
        "28": "20200504_130829.webp",
        "29": "20200506_182642.webp",
        "30": "20200506_182703.webp",
        "31": "20200506_185950.webp",
        "32": "20201009_174746.webp",
        "33": "20201222_132115.webp",
      };

      backChanger();

      // ending of dom load check
      console.log("window loaded");
    },
    false
  );
});
