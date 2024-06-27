import useSelect from '@renderer/hooks/useSelect'

export default function Result() {
  const { data, id, handleSelectItem } = useSelect()
  return (
    <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[7px] pb-2">
      {data.map((item) => (
        <div
          key={item.id}
          className={`text-slate-700 truncate px-2 py-1 ${item.id == id ? 'bg-orange-400 text-white rounded-md' : ''}`}
          onClick={() => {
            handleSelectItem(item.id)
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}