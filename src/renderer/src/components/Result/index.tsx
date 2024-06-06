import { useEffect, useState } from 'react'
import useCode from '@renderer/hooks/useCode'

export default function Result() {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = (e: KeyboardEvent) => {
    if (data.length === 0) return setCurrentIndex(0)
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((prev) => (prev - 1 <= 0 ? data.length - 1 : prev - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((prev) => (prev + 1 >= data.length ? 0 : prev + 1))
        break
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data])
  return (
    <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[8px]">
      {currentIndex}
      {data.map((item) => (
        <div key={item.id} className="text-slate-700  truncate mb-2">
          {item.content}
        </div>
      ))}
    </div>
  )
}
