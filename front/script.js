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
  },100)
  }
    var resCode = 0;
var resData= "";
  var now = Date.now();
   if (type == "") {
      popup(`<img src="assets/Chest.gif" style="width:100%;height:128px; object-fit: contain;"></img><h3 style="text-align:center;">Error</h3><p>An error has occurred. More details:<br></p><pre>You haven't picked anything in the proxy dropdown!</pre>`);
     
    } else {
fetch('/api/fetchp?type=' + type + '&time=' + now)
    .then(response => {
    console.log('Response status code:', response.status);
        resCode=response.status;
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
    var raudio = Math.floor(Math.random()*5);
      var audio = new Audio(`assets/positive/p${raudio}.mp3`);
     audio.play();
    popup(`<img src="assets/Chest.gif" style="width:100%;height:128px; object-fit: contain;"></img><h3 style="text-align:center;">Your proxy:</h3><PRE>${resData}</PRE><br><p>TIP: You can only claim 2 proxies per day.</p>`);
  }
    if (resCode != 200) {
      var raudio = Math.floor(Math.random()*5);
      var audio = new Audio(`assets/negative/n${raudio}.mp3`);
     audio.play();
      popup(`<img src="assets/Chest.gif" style="width:100%;height:128px; object-fit: contain;"></img><h3 style="text-align:center;">Error</h3><p>An error has occurred. More details:<br></p><pre>${resData}</pre>`);
    }
    var txt = document.querySelector(".dtxt-d");
    var btn = document.querySelector(".btn");
      btn.disabled = false;
    txt.className = "dtxt";
    btn.innerText = "Dispense!"
  },1000)
   }
}
function popup(txt) {
  btnclose();
  var b = document.querySelector('body');
  b.innerHTML += `<div class="popup">${txt}<br><br> <button onclick="btnclose()">Close</button></div>`;
}
function btnclose() {
  var b = document.querySelector('.popup');
  if (b != null) {b.remove();}
}