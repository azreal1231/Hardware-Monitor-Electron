const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: true,
    titleBarOverlay: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      transparent:true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.setMenuBarVisibility(false)

});