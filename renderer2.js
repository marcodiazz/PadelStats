getPlayers();

function getPlayers(){
    console.log("gerge")
    data = window.electronAPI.printPlayers()
    console.log(window.electronAPI.printPlayers())
    document.getElementById("nombre1").innerHTML = data.jugador1;
    document.getElementById("nombre2").innerHTML = data.jugador2;
    document.getElementById("nombre3").innerHTML = data.jugador3;
    document.getElementById("nombre4").innerHTML = data.jugador4;
    console.log(data.jugador1, data.jugador2, data.jugador3, data.jugador4);
  }