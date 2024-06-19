import useSearch from '@renderer/hooks/useSearch'

export default function Search() {
  const { search, handleSearch } = useSearch()
  return (
    <main className="bg-slate-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          className="w-full outline-none text-2xl text-slate-600 bg-slate-200"
          value={search}
          onChange={handleSearch}
        />
      </section>
      <section className="text-center text-slate-600 text-xs mt-3">未见翁 / sniggiw</section>
    </main>
  )
}
