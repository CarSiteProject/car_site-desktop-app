const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openInfoWindow: () => ipcRenderer.send('open-info-window'),
});
