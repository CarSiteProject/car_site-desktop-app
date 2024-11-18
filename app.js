import React, { useState } from 'react';
import { Button, Tab, Tabs, Box, Typography } from '@mui/material';
import { useEffect } from 'react';

// To communicate with the main process
const { ipcRenderer } = window.require('electron');

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const minimizeWindow = () => {
    ipcRenderer.send('minimize');
  };

  const closeWindow = () => {
    ipcRenderer.send('close');
  };

  return (
    <div>
      {/* Header with Minimize and Close Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px', backgroundColor: '#6200ea' }}>
        <Button
          sx={{ color: 'white', marginRight: '10px' }}
          onClick={minimizeWindow}
        >
          Minimize
        </Button>
        <Button
          sx={{ color: 'white' }}
          onClick={closeWindow}
        >
          Exit
        </Button>
      </Box>

      {/* Material Design Tabs */}
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="info tabs">
        <Tab label="Home" />
        <Tab label="Info" />
      </Tabs>
      
      <Box sx={{ padding: '20px' }}>
        {activeTab === 0 && (
          <Typography variant="h6" component="div">
            Welcome to the Car Site App!
          </Typography>
        )}

        {activeTab === 1 && (
          <Box>
            <Typography variant="h6">About this App</Typography>
            <Typography variant="body1">
              This is a Windows-only Electron app for the Car Site Project.
              It wraps the website [Car Site](https://carsiteproject.github.io/car-site.github.io/) in a desktop application.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Developer: Moxi-u7 | GitHub: <a href="https://github.com/moxi-u7" target="_blank">github.com/moxi-u7</a>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Electron: <a href="https://www.electronjs.org/" target="_blank">electronjs.org</a>
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
}

export default App;
