import { app } from 'electron'
import { createWindow } from './window'
import { registerIpc } from './ipc'
import { registerShortCut, unregisterShortCut } from './shortCut'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
})

unregisterShortCut(app)
