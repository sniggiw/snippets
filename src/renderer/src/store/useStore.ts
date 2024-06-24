import { CodeType } from '@renderer/data'
import { create } from 'zustand'

interface StateProps {
  data: CodeType[]
  setData: (data: CodeType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (message: string) => void
}

const useStore = create<StateProps>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  search: '',
  setSearch: (content) => set({ search: content }),
  error: '',
  setError: (message) => set({ error: message })
}))

export default useStore
