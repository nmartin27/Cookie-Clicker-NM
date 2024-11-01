// ========Constants========

const cookie = document.querySelector("#cookie");
const startButton = document.querySelector("#start");
const background = document.querySelector("#background");
const achieve = document.getElementById("achieve");


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
  achieve.style.display = 'block'

});
 
cookie.addEventListener("click", () => {
  cookieClicks.innerHTML = `You have ${cookieClicked} cookie(s)!`;
  console.log("clicked");
  incrementClicks(click);
  // cookieClicks.appendChild(cookie); Made 'cookie' a parent outside of 'cookieClicks'
  if (cookieClicked === 11  || cookieClicked === 101) {
    achieve.textContent = 'You got the hang of this!';
    achieve.style.display = 'block';
  } else if (cookieClicked === 51) {
       achieve.textContent = 'Clickin phenom!';
       achieve.style.display = 'block';
  } else if (cookieClicked !== 11 ) {
    achieve.style.display = 'none';
  }
});

function incrementClicks(click) { 
  cookieClicked += 1;
};


// ===========DOM Manipulants ========

cookie.style.display = "none";
achieve.style.display = 'none';
achieve.style.borderStyle = 'outset'; 
achieve.style.fontSize = '40px'