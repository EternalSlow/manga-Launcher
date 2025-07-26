const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 475,
    height: 812,
    aspectRatio: 9/16,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('main.html')
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// label: 'Screen',

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit()
// })