"use strict";


// color variabless

// main front and background colors
const blackColor = 'rgb(33,33,33)';
const whiteColor = 'rgb(244,244,244)';

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


// Theme switcher -  according to the hour
const lightSwitch = document.getElementById('light-switch');
lightSwitch.addEventListener('click', modeChanger);

const colorMode = () => {
   const currentHour = (new Date()).getHours();
   console.log(currentHour);
   if (currentHour < 6 || currentHour > 18) {
      colorNightMode();
      lightSwitch.classList.add('moon');
      lightSwitch.classList.remove('sun');

   } else {
      colorDayMode();
      lightSwitch.classList.add('sun');
      lightSwitch.classList.remove('moon');

   };
}
colorMode();





// Theme switcher - manual
function modeChanger() {
if (lightSwitch.classList.contains('sun')) {
   colorNightMode();
   lightSwitch.classList.remove('sun');
   lightSwitch.classList.add('moon');
   console.log('night');

} else if (lightSwitch.classList.contains('moon'))  {
   colorDayMode();
   lightSwitch.classList.add('sun');
   lightSwitch.classList.remove('moon');
   console.log('day');

}

}

