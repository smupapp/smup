'use strict';

// Import parts of electron to use
const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const url = require('url');
const CommandExec = require('command-exec');
const { get } = require('lodash');

const PLATFORM = process.platform;

const EVENTS = {
  OPEN_EXTERNAL_LINK: 'open_external_link',
  PRE_INSTALL: 'pre_is_app_install',
  PRE_INSTALLED: 'pre_app_installed',
  PRE_SETUP: 'pre_app_setup',
  PRE_SETUP_PROGRESS: 'pre_app_setup_progress',
  SETUP: 'app_setup',
  SETUP_PROGRESS: 'app_setup_progress'
};

const STATES = {
  INPROGRESS: 'inprogress',
  COMPLETED: 'completed',
  PENDING: 'pending',
  ERROR: 'error'
};

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Keep a reference for dev mode
let dev = false;
if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
  dev = true;
}

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: 'Smup - BBApp Store',
    width: 1024, height: 768, show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // and load the index.html of the app.
  let indexPath;
  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    });
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    });
  }
  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    // Open the DevTools automatically if developing
    if (dev) {
      mainWindow.webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  initIPCListeners();
}

// ---------------------- LISTENERS -----------------------//

const initIPCListeners = () => {
  ipcMain.on(EVENTS.OPEN_EXTERNAL_LINK, openExternalLink);
  ipcMain.on(EVENTS.PRE_INSTALL, isAppInstalledAsync);
  ipcMain.on(EVENTS.PRE_SETUP, preAppSetupAsync);
  ipcMain.on(EVENTS.SETUP, appSetupAsync);
};


const openExternalLink = (event, link) => {
  console.log(link);
  shell.openExternal(link);
};


const isAppInstalledAsync = async (event, preInstall) => {
  await validatePreInstallAsync(preInstall)
};


const preAppSetupAsync = async (event, prerequisites) => {
  await validatePrerequisitesAsync(prerequisites)
};


const appSetupAsync = async (event, installation) => {
  try {
    await installAsync(installation);
  } catch (err) {
    console.log('appSetupAsync', err);
  }
};


const validatePreInstallAsync = async (preInstall) => {

  const platformCommand = get(preInstall, ['command', PLATFORM]);
  if (!platformCommand) {
    sendAppInstalledStatus(false);
  }

  try {
    await CommandExec(platformCommand);
    sendAppInstalledStatus(true);
  } catch (err) {
    sendAppInstalledStatus(false);
  }
};


const validatePrerequisitesAsync = async (prerequisites) => {

  sendPreAppSetupProgress({
    label: prerequisites.label,
    state: STATES.INPROGRESS
  });

  console.log(prerequisites);

  for (const command of prerequisites.commands) {

    await sleepAsync(1000);

    const platformCommand = get(command, ['command', PLATFORM]);
    if (!platformCommand) {
      return;
    }

    try {
      await CommandExec(platformCommand);
    } catch (err) {

      console.log(err);
      sendPreAppSetupProgress({
        label: get(command, ['error']),
        state: STATES.ERROR
      });

      return;
    }
  }

  sendPreAppSetupProgress({
    label: prerequisites.labelSuccess,
    state: STATES.COMPLETED
  });

  return true;
};


const installAsync = async (installation) => {

  let labelSucess = '';

  for (const install of installation) {

    sendAppSetupProgress({
      label: install.label,
      state: STATES.INPROGRESS
    });

    await sleepAsync(1000);

    const platformCommand = get(install, ['command', PLATFORM]);
    if (!platformCommand) {
      return;
    }

    try {
      console.log(`Running: ${platformCommand}`);
      await CommandExec(platformCommand);
      labelSucess = install.labelSuccess;
    } catch (err) {

      console.log('installAsync', err);
      
      const error = get(install, ['error']);
      sendAppSetupProgress({
        label: error,
        state: STATES.ERROR
      });

      return;
    }
  }

  sendAppSetupProgress({
    label: labelSucess,
    state: STATES.COMPLETED
  });
};


// ---------------------- EMITTERS -----------------------//

const sendPreAppSetupProgress = (data) => {
  console.log('sending', 'pre setup progress', data);
  sendEvent(EVENTS.PRE_SETUP_PROGRESS, data);
}


const sendAppInstalledStatus = (status) => {
  sendEvent(EVENTS.PRE_INSTALLED, status);
};


const sendAppSetupProgress = (data) => {
  sendEvent(EVENTS.SETUP_PROGRESS, data);
}


const sendEvent = (name, data) => {
  mainWindow.webContents.send(name, data);
};


const sleepAsync = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (PLATFORM !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
