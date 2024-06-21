import { app, globalShortcut, dialog, BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

const shortCutConfig = {
  search: ''
}

export const registerShortCut = (win: BrowserWindow) => {
  app.whenReady().then(() => {
    ipcMain.on('shortCut', (_event: IpcMainEvent, type: 'search', shortCut: string) => {
      if (shortCutConfig.search) {
        globalShortcut.unregister(shortCutConfig.search)
        shortCutConfig.search = ''
      }
      shortCutConfig.search = shortCut

      switch (type) {
        case 'search':
          registerSearchShortCut(win, shortCutConfig.search)
          break
        default:
          break
      }
    })
  })
}

function registerSearchShortCut(win: BrowserWindow, shortCut: string) {
  const ret = globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })

  if (!ret) {
    dialog.showErrorBox('温馨提示', '唤起/隐藏 snippets 快捷键注册失败')
  }
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
