/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
 const { contextBridge, ipcRenderer} = require('electron')

 contextBridge.exposeInMainWorld('electronAPI', {
    setPlayers: (data) => {
      console.log(data)
      ipcRenderer.send('set-players', data)
    },
    
    // printPlayers: () => {
    //   // La vista quiere recibir sus putos datos
    //   ipcRenderer.on('printPlayers', (event, data) => {
    //     console.log(data);
        
    //   });
    // }
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
