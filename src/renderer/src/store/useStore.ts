import { CodeType } from '@renderer/data'
import { create } from 'zustand'

interface StateProps {
  data: CodeType[]
  setData: (data: CodeType[]) => void
  search: string
  setSearch: (search: string) => void
}

const useStore = create<StateProps>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  search: '',
  setSearch: (content) => set({ search: content })
}))

export default useStore
