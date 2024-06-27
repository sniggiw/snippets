import { BrowserWindow } from 'electron'
import { createWindow } from './window'

let win = null as null | BrowserWindow

const createConfigWindow = () => {
  if (!win) win = createWindow()
  win.on('close', () => (win = null))
}

export { createConfigWindow }
