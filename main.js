const { app, BrowserWindow, ipcMain } = require('electron');
const bcrypt = require('bcrypt')
const path = require('path')
const fs = require('fs/promises')

let mainWindow = undefined;
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('login.html')
}

const register = () => {

}

const login = async (credentials) => {
  try {
    const response = await fs.readFile('./credentials/users.json', 'utf-8')
    const users = JSON.parse(response)
    const isValidUser = users.find((user) => user.email === credentials.email && user.password === credentials.password) ?? false
    console.log(isValidUser)
    if (isValidUser) {
      mainWindow.loadFile('index.html')
    } else {
      return { error: true }
    }
  } catch (error) {
    throw new Error(error)
  }
}


const logout = () => {

}

ipcMain.handle('login', async (_, credentials) => {
  return login(credentials)
})

app.whenReady().then(createMainWindow)

