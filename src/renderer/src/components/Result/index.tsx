import useCode from '@renderer/hooks/useCode'

export default function Result() {
  const { data } = useCode()
  return (
    <div className="bg-slate-50 px-3 rounded-bl-lg rounded-br-lg -mt-[8px]">
      {data.map((item) => (
        <div key={item.id} className="text-slate-700  truncate mb-2">
          {item.content}
        </div>
      ))}
    </div>
  )
}
