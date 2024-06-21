export default () => {
  const registerShortCut = (type: 'search', shortCut: string = "CommandOrControl+shift+'") => {
    window.api.shortCut(type, shortCut)
  }
  return { registerShortCut }
}
