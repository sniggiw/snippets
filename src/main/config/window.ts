import { shell, BrowserWindow, screen } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../../resources/icon.png?asset'
import url from 'node:url'

export function createWindow(): BrowserWindow {
  const { width } = screen.getPrimaryDisplay().workAreaSize

  const configWin = {
    width: 500,
    height: 500
  }

  const win = new BrowserWindow({
    width: configWin.width,
    height: configWin.height,
    x: width - configWin.width,
    y: 0,
    // center: true,
    show: false,
    autoHideMenuBar: true,
    // frame: false,
    // transparent: true,
    alwaysOnTop: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  win.on('ready-to-show', () => {
    win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  win.webContents.openDevTools()

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
  } else {
    // win.loadFile(join(__dirname, '../renderer/index.html'))
    win.loadURL(
      url.format({
        //编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        //协议
        protocol: 'file',
        //protocol 后面需要两个/
        slashes: true,
        //hash 的值
        hash: 'config'
      })
    )
  }

  return win
}
