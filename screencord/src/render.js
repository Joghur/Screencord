// Buttons
const videoElement = document.querySelector('video');
const startBtn = document.querySelector('startBtn');
const stopBtn = document.querySelector('stopBtn');
const videoSelectBtn = document.querySelector('videoSelectBtn');
videoSelectBtn.onclick = getVideoSources;

// remote make us able to build menues (IPC inter-process communication)
const { desktopCapturer, remote } = require('electron');
const { Menu } = remote;

// Get the available video sources
async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
      types: ['window', 'screen']
    });
  
    const videoOptionsMenu = Menu.buildFromTemplate(
      inputSources.map(source => {
        return {
          label: source.name,
          click: () => selectSource(source)
        };
      })
    );
  
  
    videoOptionsMenu.popup();
  }

// Change the videoSource window tp record
async function selectSource(source){
    
}
