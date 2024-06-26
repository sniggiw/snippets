import { useEffect, useRef, MutableRefObject } from 'react'
import Search from './components/Search'
import Result from './components/Result'
import Error from './components/Error'
import useShortCut from './hooks/useShortCut'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'

function App(): JSX.Element {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLElement>)
  }, [])

  const { registerShortCut } = useShortCut()
  registerShortCut('search', "CommandOrControl+shift+'")

  return (
    <main className="relative p-2" ref={mainRef}>
      <Error />
      <Search />
      <Result />
    </main>
  )
}

export default App
