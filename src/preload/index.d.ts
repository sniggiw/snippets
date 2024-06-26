import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCut: (type: string, shortCut: string) => Promise<boolean>
      setIgnoreMouseEvents: (isIgnore: boolean, option?: { forward: boolean }) => void
      openConfigWindow: () => void
    }
  }
}
