/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
let jugador1;

function setPlayers(){
  document.getElementById("nombre1").innerHTML = "Marco";
  console.log(jugador1);
}

  function returnText(){
    jugador1 = document.getElementById("jugador1").value;
    let jugador2 = document.getElementById("jugador2").value;
    let jugador3 = document.getElementById("jugador3").value;
    let jugador4 = document.getElementById("jugador4").value;
    window.location = "marcador.html";
    setPlayers(jugador1);
  }
