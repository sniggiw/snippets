import useStore from '@renderer/store/useStore'

export default () => {
  const setError = useStore((state) => state.setError)

  // 注册快捷键
  const registerShortCut = async (
    type: 'search',
    shortCut: string = "CommandOrControl+shift+'"
  ) => {
    const isBind = await window.api.shortCut(type, shortCut)
    isBind || setError('快捷键注册失败')
  }
  return { registerShortCut }
}
