const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,  // Ensure you can use Node.js features in the renderer
      contextIsolation: false // Important to allow integration with Electron APIs
    }
  });

  // Load the site (You can replace this with any URL or your local HTML file)
  mainWindow.loadURL('https://carsiteproject.github.io/car-site.github.io/');

  // Open DevTools (optional)
  // mainWindow.webContents.openDevTools();

  // When the window is closed, clean up the reference
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Quit the app when all windows are closed (important for Electron)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create window when Electron is ready
app.whenReady().then(() => {
  createWindow();

  // On macOS, re-create the window when the app is reactivated
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
