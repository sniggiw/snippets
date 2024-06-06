import { useContext } from 'react'
import { CodeContext } from '@renderer/context/CodeContext'

export default () => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('CodeContext.Provider 定义失败')
  }
  return { ...context }
}
