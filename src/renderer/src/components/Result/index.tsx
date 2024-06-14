import useCodeSelect from '@renderer/hooks/useCodeSelect'

export default function Result() {
  const { data, currentIndex } = useCodeSelect()
  return (
    <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[8px] overflow-hidden">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`text-slate-700 truncate mb-2 ${currentIndex == index ? 'bg-orange-400 text-white rounded-md' : ''}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
