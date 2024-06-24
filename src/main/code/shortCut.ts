import {
  app,
  globalShortcut,
  dialog,
  BrowserWindow,
  ipcMain,
  IpcMainEvent,
  IpcMainInvokeEvent
} from 'electron'

const shortCutConfig = {
  search: ''
}

// export const registerShortCut = (win: BrowserWindow) => {
//   app.whenReady().then(() => {
//     ipcMain.on('shortCut', (_event: IpcMainEvent, type: 'search', shortCut: string) => {
//       if (shortCutConfig.search) {
//         globalShortcut.unregister(shortCutConfig.search)
//         shortCutConfig.search = ''
//       }
//       shortCutConfig.search = shortCut

//       switch (type) {
//         case 'search':
//           registerSearchShortCut(win, shortCutConfig.search)
//           break
//         default:
//           break
//       }
//     })
//   })
// }

export const registerShortCut = (win: BrowserWindow) => {
  app.whenReady().then(() => {
    ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
      if (shortCutConfig.search) {
        globalShortcut.unregister(shortCutConfig.search)
        shortCutConfig.search = ''
      }
      shortCutConfig.search = shortCut
      switch (type) {
        case 'search':
          return registerSearchShortCut(win, shortCutConfig.search)
      }
    })
  })
}

function registerSearchShortCut(win: BrowserWindow, shortCut: string) {
  return globalShortcut.register(shortCut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
