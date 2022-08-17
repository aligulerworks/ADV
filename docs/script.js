'use strict';

// color variabless
// main front and background colors
const blackColor = 'rgb(33,33,33)';
const whiteColor = 'rgb(211,211,211)';

// base shade values for rgba appliances
const shadeBlack = '11,11,11';
const shadeWhite = '244,244,244';

// set the current shader

const docBody = document.querySelector('html');

let colorNightMode = () => {
  //assigns main front and background color
  document.querySelector(':root').style.setProperty('--back-color', blackColor);
  document.querySelector(':root').style.setProperty('--color', whiteColor);

  //shades value for rgba appliances
  document.querySelector(':root').style.setProperty('--shade', shadeBlack);

  return;
};

let colorDayMode = () => {
  document.querySelector(':root').style.setProperty('--back-color', whiteColor);
  document.querySelector(':root').style.setProperty('--color', blackColor);

  document.querySelector(':root').style.setProperty('--shade', shadeWhite);

  return;
};

//SWITCHERS
// Light switcher -  according to the hour
const lightSwitch = document.getElementById('light-switch');
lightSwitch.addEventListener('click', modeChanger);

const colorMode = () => {
  const currentHour = new Date().getHours();
  console.log(currentHour);
  if (currentHour < 6 || currentHour > 18) {
    colorNightMode();
    lightSwitch.classList.add('moon');
    lightSwitch.classList.remove('sun');
  } else {
    colorDayMode();
    lightSwitch.classList.add('sun');
    lightSwitch.classList.remove('moon');
  }
};
colorMode();

// Light switcher - manual
function modeChanger() {
  if (lightSwitch.classList.contains('sun')) {
    colorNightMode();
    lightSwitch.classList.remove('sun');
    lightSwitch.classList.add('moon');
    console.log('night');
  } else if (lightSwitch.classList.contains('moon')) {
    colorDayMode();
    lightSwitch.classList.add('sun');
    lightSwitch.classList.remove('moon');
    console.log('day');
  }
}

// //Background Switcher - Random
const backSwitch = document.getElementById('back-switch');
backSwitch.addEventListener('click', backChanger);

function backChanger() {
  console.log('calisiyor');
  const pickOne = function () {
    const picNumber = Math.floor(Math.random() * 12) + 1;
    return picNumber;
  };
  console.log(pickOne());
  document.getElementById('back-image').src = `./images/unsplash-backgrounds/${
    backList[pickOne()]
  }`;
}

// Image List Object
let backList = {
  '1': 'aaron-burden-yzgF-AQt1sQ-unsplash.jpg',
  '2': 'annie-spratt--KKLWDAgj2Q-unsplash.jpg',
  '3': 'brian-patrick-tagalog-_8hGFBxWD0A-unsplash.jpg',
  '4': 'emmanuel-ben-paul-R_k6kaHhHnY-unsplash.jpg',
  '5': 'frantisek-g-XXuVXLy5gHU-unsplash.jpg',
  '6': 'joe-cooke-MPFiYu__1bA-unsplash.jpg',
  '7': 'martin-sX4lxBWV0-A-unsplash.jpg',
  '8': 'mink-mingle-g0Qdolm3K14-unsplash.jpg',
  '9': 'ritesh-mandaliya-nMvnVSRz-gM-unsplash.jpg',
  '10': 'teemu-paananen-OOE4xAnBhKo-unsplash.jpg',
  '11': 'wesley-tingey-9-OCsKoyQlk-unsplash.jpg',
  '12': 'yiqun-tang-3o7O_6fi7Qc-unsplash.jpg',
};

backChanger();
