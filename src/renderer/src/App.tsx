import Search from './components/Search'
import Result from './components/Result'
import Error from './components/Error'
import useShortCut from './hooks/useShortCut'

function App(): JSX.Element {
  const { registerShortCut } = useShortCut()
  registerShortCut('search', "CommandOrControl+shift+'")
  window.api.setIgnoreMouseEvents(true, { forward: true })
  return (
    <main className="relative">
      <Error />
      <Search />
      <Result />
    </main>
  )
}

export default App
