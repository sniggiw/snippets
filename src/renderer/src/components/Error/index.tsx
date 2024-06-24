import { useEffect } from 'react'
import useStore from '@renderer/store/useStore'

export default function Error() {
  const error = useStore((state) => state.error)
  const setError = useStore((state) => state.setError)

  useEffect(() => {
    const timer = setTimeout(() => setError(''), 2000)
    return () => clearTimeout(timer)
  }, [error])

  if (!error) return null
  return <div className={'bg-red-500 text-white'}>{error}</div>
}
