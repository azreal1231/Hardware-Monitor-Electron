const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: true,
    titleBarOverlay: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      transparent:true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.center();
  mainWindow.setMenuBarVisibility(true)

  mainWindow.webContents.openDevTools()

  var splash = new BrowserWindow({
    width: 600, 
    height: 600, 
    transparent: true, 
    frame: false, 
    alwaysOnTop: true 
  });

  splash.loadFile('splashScreen.html');
  // splash.center();

  setTimeout(function () {
    splash.close();
    mainWindow.show();
  }, 2000);

});

// splash.close();
// mainWindow.show();

