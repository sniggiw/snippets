import { ChangeEvent } from 'react'
import { codes } from '@renderer/data'
import useStore from '@renderer/store/useStore'

export default () => {
  const setData = useStore((state) => state.setData)
  const search = useStore((state) => state.search)
  const setSearch = useStore((state) => state.setSearch)

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setData(
      codes
        .filter((code) =>
          code.content.toLowerCase().includes(e.target.value.toLowerCase() || '@@@@@')
        )
        .splice(0, 7)
    )
  }

  return {
    handleSearch,
    search
  }
}
