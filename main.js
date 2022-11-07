// Modules to control application life and create native browser window
const { pbkdf2 } = require('crypto');
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

let player1, player2, player3, player4;

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 920,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: process.env.NODE_ENV !== 'development'

    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

function handleSetPlayers (event, jugador1, jugador2, jugador3, jugador4) {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)
  player1 = jugador1;
  player2 = jugador2;
  player3 = jugador3;
  player4 = jugador4;
  event.reply('printPlayers', player1, player2, player3, player4);
  // mainWindow.webContents.send('printPlayers', player1, player2, player3, player4)

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('set-players', handleSetPlayers)
// console.log(player1, player2, player3, player4)

