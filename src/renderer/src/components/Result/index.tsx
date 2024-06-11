import { useEffect, useState } from 'react'
import useCode from '@renderer/hooks/useCode'

export default function Result() {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleKeyEvent = (e: KeyboardEvent) => {
    if (data.length === 0) {
      setCurrentIndex(0)
      navigator.clipboard.writeText('')
      return
    }
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((prev) => (prev - 1 < 0 ? data.length - 1 : prev - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((prev) => (prev + 1 >= data.length ? 0 : prev + 1))
        break
      case 'Enter':
        navigator.clipboard.writeText(data[currentIndex].content)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data, currentIndex])
  return (
    <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[8px] overflow-hidden">
      {data.map((item, index) => (
        <div key={item.id} className={`text-slate-700 truncate mb-2 ${currentIndex == index ? 'bg-orange-400 text-white rounded-md' : ''}`}>
          {item.content}
        </div>
      ))}
    </div>
  )
}
