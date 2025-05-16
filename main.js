const { app, BrowserWindow } = require('electron');
const bcrypt = require('bcrypt')
const path = require('path')
const fs = require('fs/promises')

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createMainWindow() {
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

const register = () => {

}
const login = async (credentials) => {
  try {
    const response = await fs.readFile('./credentials/users.json', 'utf-8')
    const users = JSON.parse(response)
    const isValidUser = users.find((user) => user.email === 'ee@example.com' && user.password === 'teste123') ?? false
    console.log(isValidUser)
  } catch (error) {
    throw new Error(error)
  }
}
login()

const logout = () => {

}


app.whenReady().then(createMainWindow)

