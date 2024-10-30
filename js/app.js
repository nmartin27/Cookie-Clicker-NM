// ========Constants========

const cookie = document.querySelector("#cookie");
const startButton = document.querySelector("#start");
const background = document.querySelector("#background");

// ======= Variables =========

let cookieClicked = 1;
let click = 1; 

// ===========Listeners==========


startButton.addEventListener("click", () => {
  console.log("start");
  cookie.style.display = "block";
  startButton.style.display = 'none'; 
  gamePlay.style.display = 'none';
  background.style.backgroundImage = "url('../images/backgroundCookie.jpg')";
});
 
cookie.addEventListener("click", () => {
  cookieClicks.innerHTML = `You have ${cookieClicked} cookies!`;
  console.log("clicked");
  incrementClicks(click);
  // cookieClicks.appendChild(cookie); Made 'cookie' a parent outside of 'cookieClicks'
  
});

function incrementClicks(click) { 
  cookieClicked += 1;
}


// ===========DOM Manipulants ========

cookie.style.display = "none";
