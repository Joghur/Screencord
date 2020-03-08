# screencord
## Foray into electron apps.
### This repo is for experimenting with electron app making and primarily a store for fixes made during this experiment. Made from tutorial by Fireship on Youtube:
### [link](https://www.youtube.com/watch?v=3yqDxhR2XxE)  

Made by javascript / electron  

** What works**  
At the moment all works and the .deb file produced can be installed and runs on linux mint.  

**To do**  

 * Removing all security warnings  
 * Stop seeing Dev Tools in Chromium when starting  
 * What works when developing doesn't work using app. On linux-app this javascript function doesn't work as intended (render.js, line 34):
 `const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });`  
 
  



**Resume:**  
What had do be done after initial electron-forge init (and also `npm install` of said modules):  

 * package.json:
 Under dependencies:  
`,
    "electron-compile": "6.4.4"`

 * Under devDependencies:  
`    ,
    "electron-prebuilt-compile": "4.0.0"`
