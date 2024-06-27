import { useEffect, useRef, MutableRefObject } from 'react'
import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import Error from '@renderer/components/Error'
import useShortCut from '@renderer/hooks/useShortCut'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'

function Home(): JSX.Element {
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

export default Home
