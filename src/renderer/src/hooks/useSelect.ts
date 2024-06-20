import { useCallback, useEffect, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { data, setData } = useCode()
  const [id, setId] = useState(0)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setId((prevId) => {
            const index = data.findIndex((item) => item.id === prevId)
            return data[index - 1]?.id || data[data.length - 1].id
          })
          break
        case 'ArrowDown':
          setId((prevId) => {
            const index = data.findIndex((item) => item.id === prevId)
            return data[index + 1]?.id || data[0].id
          })
          break
        case 'Enter':
          handleSelectItem(id)
          break
      }
    },
    [data, id]
  )

  const handleSelectItem = async (id: number) => {
    const content = data.find((item) => item.id === id)?.content
    if (content) await navigator.clipboard.writeText(content)
    setData([])
    window.api.hideWindow()
  }

  useEffect(() => {
    setId(data[0]?.id || 0)
  }, [data])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  return {
    data,
    id,
    handleSelectItem
  }
}
