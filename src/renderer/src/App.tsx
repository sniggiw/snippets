import Search from './components/Search'
import Result from './components/Result'
import Error from './components/Error'
import useShortCut from './hooks/useShortCut'

function App(): JSX.Element {
  const { registerShortCut } = useShortCut()
  registerShortCut('search', "CommandOrControl+shift+'")
  return (
    <>
      <Error />
      <Search />
      <Result />
    </>
  )
}

export default App
