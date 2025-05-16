const { app, BrowserWindow } = require('electron');
const path = require('path')
const fs = require('fs')

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createMainWindow(){
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('register.html')
}

app.whenReady().then(createMainWindow)

