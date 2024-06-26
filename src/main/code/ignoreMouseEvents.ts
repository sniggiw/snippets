import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

export default (win: BrowserWindow) => {
  ipcMain.on(
    'setIgnoreMouseEvents',
    (_event: IpcMainEvent, isIgnore: boolean, option?: { forward: boolean }) => {
      win.setIgnoreMouseEvents(isIgnore, option)
    }
  )
}
