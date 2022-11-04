/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
let jugador1, jugador2, jugador3, jugador4;

function getPlayers(){
  console.log("jugador1, jugador2");
  window.electronAPI.printPlayers(jugador1, jugador2, jugador3, jugador4)
  document.getElementById("nombre1").innerHTML = jugador1;
  document.getElementById("nombre2").innerHTML = jugador2;
  document.getElementById("nombre3").innerHTML = jugador3;
  document.getElementById("nombre4").innerHTML = jugador4;
  
}

  // printPlayers(jugador1, jugador2, jugador3, jugador4);


  function setPlayers(){
    jugador1 = document.getElementById("jugador1").value;
    jugador2 = document.getElementById("jugador2").value;
    jugador3 = document.getElementById("jugador3").value;
    jugador4 = document.getElementById("jugador4").value;
    window.electronAPI.setPlayers(jugador1,jugador2, jugador3, jugador4);

    window.location.href = "marcador.html";
    getPlayers()
    
  }


  function sumarPunto(){
    
  }