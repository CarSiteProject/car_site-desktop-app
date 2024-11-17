// In the renderer process, you may want to handle actions like minimize, close, etc.
const { ipcRenderer } = require('electron');

// You can listen to events here, or modify buttons for actions like minimize, close, etc.
document.getElementById('closeButton').addEventListener('click', () => {
  ipcRenderer.send('close-app');
});

document.getElementById('minimizeButton').addEventListener('click', () => {
  ipcRenderer.send('minimize-app');
});
