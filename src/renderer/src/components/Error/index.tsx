import { useEffect } from 'react'
import useStore from '@renderer/store/useStore'
import { Alert } from 'antd'

export default function Error() {
  const error = useStore((state) => state.error)
  const setError = useStore((state) => state.setError)

  useEffect(() => {
    const timer = setTimeout(() => setError(''), 2000)
    return () => clearTimeout(timer)
  }, [error])

  if (!error) return null
  return (
    <main className="absolute top-0 w-full z-10">
      <Alert message={error} type="info" showIcon />
    </main>
  )
}
