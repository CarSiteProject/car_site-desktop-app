document.addEventListener('DOMContentLoaded', () => {
  const infoButton = document.createElement('button');
  infoButton.innerText = 'Info';
  infoButton.style.position = 'absolute';
  infoButton.style.bottom = '20px';
  infoButton.style.right = '20px';
  infoButton.style.padding = '10px 20px';
  infoButton.style.fontSize = '16px';
  infoButton.style.cursor = 'pointer';

  infoButton.addEventListener('click', () => {
    window.electronAPI.openInfoWindow();
  });

  document.body.appendChild(infoButton);
});
