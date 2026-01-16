const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('wallsense', {
  ping: () => 'pong'
})
