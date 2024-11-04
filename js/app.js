// ========Constants========

const cookie = document.querySelector("#cookie");
const startButton = document.querySelector("#start");
const background = document.querySelector("#background");
const achieve = document.getElementById("achieve");
const egg = document.querySelector("#egg");
const flour = document.querySelector("#flour");
const sugar = document.querySelector("#sugar");
const bakingSoda = document.querySelector("#bakingSoda");
const butter = document.querySelector("#butter");
const ingrediantsContainer = document.querySelector("#ingrediantsContainer");

// ======= Variables =========

let cookieClicked = 1;
let click = 1;
let eggClicked = false;
let flourClicked = false;
let sugarClicked = false;
let bakingSodaClicked = false;
let butterClicked = false;

// ===========Listeners==========
cookie.style.display = "none"; //had to move to top to get off home page
egg.style.display = "none";
flour.style.display = "none";
bakingSoda.style.display = "none";
butter.style.display = "none";
sugar.style.display = "none";

startButton.addEventListener("click", () => {
  console.log("start");
  cookie.style.display = "block";
  startButton.style.display = "none";
  gamePlay.style.display = "none";
  background.style.backgroundImage = "url('../images/backgroundCookie.jpg')";
  // achieve.style.display = "block";
  welcome.style.display = "none";
  subTitle.style.display = "none";
});

cookie.addEventListener("click", () => {
  cookieClicks.innerHTML = `You have ${cookieClicked} cookie(s)!`;
  console.log("clicked");
  incrementClicks(click);
  chocCookie.style.display = "none";

  // cookieClicks.appendChild(cookie); Made 'cookie' a parent outside of 'cookieClicks'
  function incrementClicks(click) {
    cookieClicked += 1;
  };
  
  if (cookieClicked === 11) {
    achieve.textContent = "You got the hang of this!";
    achieve.style.display = "block";

    //=====wrong spot?======
    function fadeOut() {
      achieve.classList.add("fade");
      setTimeout(() => {
        achieve.style.display = "none";
      }, 3000);
    }
    fadeOut();
  } else if (cookieClicked === 31) {
    achieve.textContent = "Clickin phenom!";
    achieve.style.display = "block";
    function fadeOut() {
      achieve.classList.add("fade");
      setTimeout(() => {
        achieve.style.display = "none";
      }, 3000);
    }
    fadeOut();
  } else if (cookieClicked === 36 || cookieClicked === 86) {
    chocCookie.style.display = "none";
    egg.style.display = "block";
    function fadeOut() {
      // egg.classList.add("fade");
      setTimeout(() => {
        egg.style.display = "none";
      }, 2000);
    }
    fadeOut();
  } else if (cookieClicked === 46 || cookieClicked === 96) {
    chocCookie.style.display = "none";
    flour.style.display = "block";
    function fadeOut() {
      setTimeout(() => {
        flour.style.display = "none";
      }, 2000);
    }
    fadeOut();
  } else if (cookieClicked === 56 || cookieClicked === 106) {
    chocCookie.style.display = "none";
    butter.style.display = "block";
    function fadeOut() {
      setTimeout(() => {
        butter.style.display = "none";
      }, 2000);
    }
    fadeOut();
  } else if (cookieClicked === 66 || cookieClicked === 116) {
    chocCookie.style.display = "none";
    bakingSoda.style.display = "block";
    function fadeOut() {
      setTimeout(() => {
        bakingSoda.style.display = "none";
      }, 2000);
    }
    fadeOut();
  } else if (cookieClicked === 76 || cookieClicked === 126) {
    chocCookie.style.display = "none";
    sugar.style.display = "block";
    function fadeOut() {
      setTimeout(() => {
        sugar.style.display = "none";
      }, 2000);
    }
    fadeOut();
  } else if (cookieClicked === 101) {
    chocCookie.style.display = "none";
    achieve.textContent = "You are pretty good!";
    achieve.style.display = "block";
    function fadeOut() {
      achieve.classList.add("fade");
      setTimeout(() => {
        achieve.style.display = "none";
      }, 3000);
    }
    fadeOut();

    // had as whole click fucntion inside and did not work ==== asked Chat for syntax
  } else if (
    eggClicked &&
    flourClicked &&
    sugarClicked &&
    bakingSodaClicked &&
    butterClicked
  ) {
    chocCookie.style.display = "block"; //Make upgrade more difficult than 30 clicks
    
  }
});

// if (
//   eggClicked &&
//     flourClicked &&
//     sugarClicked &&
//     bakingSodaClicked &&
//     butterClicked )
//     { else if (cookieClicked === 50) {
//     chocCookie.style.display = "block"; //Make upgrade more difficult than 30 clicks
//   }
//   };

  chocCookie.addEventListener("click", () => {
    cookieClicks.innerHTML = `You have ${cookieClicked -= 30} cookie(s)!`;
    // cookieClicked -= 30;
    cookie.style.backgroundImage = "url('../images/CCcookie.png')";
    chocCookie.style.display = "none";
    ingrediantsContainer.style.display = "none";
    
  }
);

egg.addEventListener("click", () => {
  // console.log('egg') test
  eggClicked = true;
  egg.style.display = "none";
  egg2.style.display = "block";
  ingrediantsContainer.style.display = "block";
  ingrediantsTitle.style.display = "block";

  // ingrediantsContainer.style.backgroundImage = "url('../images/egg.png')";
  // ingrediantsContainer.style.backgroundSize = "90%";
});
flour.addEventListener("click", () => {
  flourClicked = true;
  flour.style.display = "none";
  flour2.style.display = "block";
  ingrediantsContainer.style.display = "block";
  ingrediantsTitle.style.display = "block";
});
sugar.addEventListener("click", () => {
  sugarClicked = true;
  sugar.style.display = "none";
  sugar2.style.display = "block";
  ingrediantsContainer.style.display = "block";
  ingrediantsTitle.style.display = "block";

  // ingrediantsContainer.style.backgroundImage = "url('../images/sugar.png')";
  // sugar.style.backgroundSize = "contain";
  // ingrediantsContainer.style.backgroundSize = "20%";
});
bakingSoda.addEventListener("click", () => {
  bakingSodaClicked = true;
  bakingSoda.style.display = "none";
  bakingSoda2.style.display = "block";
  ingrediantsContainer.style.display = "block";
  ingrediantsTitle.style.display = "block";

  // ingrediantsContainer.style.backgroundImage = "url('../images/bakingSoda.png')";
  // bakingSoda.style.backgroundSize = "contain";
  // ingrediantsContainer.style.backgroundSize = "20%";
});
butter.addEventListener("click", () => {
  butterClicked = true;
  butter.style.display = "none";
  butter2.style.display = "block";
  ingrediantsContainer.style.display = "block";
  ingrediantsTitle.style.display = "block";

  // ingrediantsContainer.style.backgroundImage = "url('../images/butter.png')";
  // butter.style.backgroundSize = "contain";
  // ingrediantsContainer.style.backgroundSize = "20%";
});

// ===========DOM Manipulants ========

achieve.style.display = "none";
achieve.style.borderStyle = "outset";
achieve.style.fontSize = "40px";
chocCookie.style.display = "none";
egg2.style.display = "none";
flour2.style.display = "none";
bakingSoda2.style.display = "none";
butter2.style.display = "none";
sugar2.style.display = "none";
ingrediantsContainer.style.display = "none";
ingrediantsTitle.style.display = "none";
