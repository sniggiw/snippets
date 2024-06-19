import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

export const registerIpc = (win: BrowserWindow) => {
  ipcMain.on('hideWindow', () => {
    win.hide()
  })
}
