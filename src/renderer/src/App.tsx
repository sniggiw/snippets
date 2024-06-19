import { useState } from 'react'
import Search from './components/Search'
import Result from './components/Result'
import { CodeContext } from './context/CodeContext'
import { CodeType } from './data'

function App(): JSX.Element {
  const [data, setData] = useState<CodeType[]>([])

  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Search />
      <Result />
    </CodeContext.Provider>
  )
}

export default App
