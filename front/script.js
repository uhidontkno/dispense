function disp() {
  const dropdown = document.getElementById('proxy');
  const type = dropdown.value;
  if (type != "") {
    var btn = document.querySelector(".btn");
    var audio = new Audio('assets/click.mp3');

    audio.play();
    btn.disabled = true;
    btn.innerText = "..."
    setTimeout(() => {
      var txt = document.querySelector(".dtxt");
      txt.className = "dtxt-d";
    }, 100)
  }
  var resCode = 0;
  var resData = "";
  var now = Date.now();
  if (type == "") {

    popup(`<img src="assets/Chest.gif" style="width:100%;height:128px; object-fit: contain;"></img><h3 style="text-align:center;">Error</h3><p>An error has occurred. More details:<br></p><pre>You haven't picked anything in the proxy dropdown!</pre>`);
    var audio = new Audio('assets/positive/p2.mp3');
    audio.play();
  } else {
    fetch('/api/fetchp?type=' + type + '&time=' + now)
      .then(response => {
        console.log('Response status code:', response.status);
        resCode = response.status;
        return response.text();
      })
      .then(data => {
        console.log('Response data:', data);
        resData = data;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });

    setTimeout(() => {



      if (resCode == 200) {

        popup(`<img src="assets/Chest.gif" style="width:100%;height:128px; object-fit: contain;"></img><h3 style="text-align:center;">Your proxy:</h3><PRE>${resData}</PRE><br><p>TIP: You can only claim 2 proxies per day.</p>`);
        var raudio = Math.floor(Math.random() * 5);
        var audio = new Audio(`assets/positive/p${raudio}.mp3`);
        audio.play();
      }
      if (resCode != 200) {

        popup(`<img src="assets/Chest.gif" style="width:100%;height:128px; object-fit: contain;"></img><h3 style="text-align:center;">Error</h3><p>An error has occurred. More details:<br></p><pre>${resData}</pre>`);
        var raudio = Math.floor(Math.random() * 5);
        var audio = new Audio(`assets/negative/n${raudio}.mp3`);
        audio.play();
      }
      var txt = document.querySelector(".dtxt-d");
      var btn = document.querySelector(".btn");
      btn.disabled = false;
      txt.className = "dtxt";
      btn.innerText = "Dispense!"
    }, 1000)
  }
}
function popup(txt) {
  btnclose();
  var b = document.querySelector('body');
  b.innerHTML += `<div class="popup">${txt}<br><br> <button onclick="btnclose()">Close</button></div>`;
}
function btnclose() {
  var b = document.querySelector('.popup');
  if (b != null) { b.remove(); }
}















































r = Math.floor(Math.random() * 69);
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var feulz = 0;
if (month == 4 && day == 1) {
  feulz = 1;
}
// a key map of allowed keys
var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      triggerfunny();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
let done = 0
    let taudio = new Audio('assets/click.mp3');
async function type(text, speed, element) {
  
  for (let i = 0; i < text.length; i++) {
    
    const chr = text.charAt(i);
    if (chr === 'σ') {
      element.innerHTML += '<br>';
    } else if (chr === 'τ') {} else {
      taudio.play();
      element.innerHTML += chr;
    }
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}


    
// https://files.catbox.moe/9e1ic6.mp4
async function triggerfunny() {

  alert("CHEAT MODE ACTIVATED!!1")
  document.write(`<style>* {color-scheme:dark;font-family:monospace;} body {width:100%;height:100%;background-color:#0f1f0f;} p {font-family:monospace;font-size:18px;color:yellow;}</style><p id='fartpod'>CHEAT MODE ACTIVATED!!1<br></p>`) // initate rickroll

  setTimeout(async () => {
    ele = document.getElementById('fartpod');
await type("Activating cheats", 30,ele);
await type("...", 200,ele);
await type("..........σ", 20,ele);

  await type("Successfully activated cheats!σ", 30,ele);  
await type("Running Cheat 1 [Dump all]:σLog:σ ", 3,ele); 
await type("Dττττττττττττumττττττττττττping... σττττττττττττττττττττττττττττττττττττττττττττττττττLink 1:τττ", 10,ele); 
    await type("https://w ", 50,ele); 
    ele.innerHTML = "lol get rickrolled lmao! you fell for it lol lol lol get rekt. how did you fall for it?";
    ele.innerHTML += `<video style='width:100%;height:100%;position:fixed;top:2px;left:2px;background:#000;' src="https://files.catbox.moe/9e1ic6.mp4" autoplay controls></video>`;
  }, 1500)


}
if (r == 69 || feulz == 1) {
  triggerfunny();
}