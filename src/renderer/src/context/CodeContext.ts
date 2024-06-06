import { CodeType } from '@renderer/data'
import { createContext, Dispatch, SetStateAction } from 'react'

interface ContextProps {
  data: CodeType[]
  setData: Dispatch<SetStateAction<CodeType[]>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)
