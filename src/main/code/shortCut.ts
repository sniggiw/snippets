import { app, globalShortcut, dialog, BrowserWindow } from 'electron'

export const registerShortCut = (win: BrowserWindow) => {
  app.whenReady().then(() => {
    // 注册一个快捷键监听器
    const ret = globalShortcut.register("CommandOrControl+shift+'", () => {
      win.show()
    })

    if (!ret) {
      dialog.showErrorBox('温馨提示', '快捷键注册失败')
    }

    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered("CommandOrControl+shift+'"))
  })
}

export const unregisterShortCut = (app: Electron.App) => {
  app.on('will-quit', () => {
    // 注销 CommandOrControl+shift+' 快捷键
    globalShortcut.unregister("CommandOrControl+shift+'")

    // 注销所有快捷键
    // globalShortcut.unregisterAll()
  })
}