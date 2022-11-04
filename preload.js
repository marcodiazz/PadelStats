/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
 const { contextBridge, ipcRenderer} = require('electron')

 contextBridge.exposeInMainWorld('electronAPI', {
    setPlayers: (jugador1, jugador2, jugador3, jugador4) => ipcRenderer.send('set-players', jugador1, jugador2, jugador3, jugador4),
    printPlayers: (jugador1, jugador2, jugador3, jugador4) => ipcRenderer.on('printPlayers', jugador1, jugador2, jugador3, jugador4),
 })

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
