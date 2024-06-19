import { app } from 'electron'
import { createWindow } from './window'
import { registerIpc } from './ipc'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
})
