import { useCallback, useEffect, useState } from 'react'
import useStore from '@renderer/store/useStore'

export default () => {
  const data = useStore((state) => state.data)
  const setData = useStore((state) => state.setData)
  const setSearch = useStore((state) => state.setSearch)
  const id = useStore((state) => state.id)
  const setId = useStore((state) => state.setId)

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          {
            const index = data.findIndex((item) => item.id === id)
            setId(data[index - 1]?.id || data[data.length - 1].id)
          }
          break
        case 'ArrowDown':
          {
            const index = data.findIndex((item) => item.id === id)
            setId(data[index + 1]?.id || data[0].id)
          }
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
    setSearch('')
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
