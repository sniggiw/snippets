import useSearch from '@renderer/hooks/useSearch'
import { SettingOne } from '@icon-park/react'
import { Input } from 'antd'

export default function Search() {
  const { search, handleSearch } = useSearch()

  return (
    <main className="bg-slate-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg flex items-center gap-1 nodrag">
        <button
          onClick={() => {
            // window.api.sql('select * from categories', 'findAll').then((res) => {
            //   console.log(res)
            // })

            // window.api.sql('select * from categories where id=2', 'findOne').then((res) => {
            //   console.log(res)
            // })

            window.api
              .sql(`insert into categories (name,created_at) values('vue',datetime())`, 'insert')
              .then((res) => {
                console.log(res)
              })
          }}
        >
          点击
        </button>
        <SettingOne
          theme="outline"
          size="22"
          fill="#34495e"
          strokeWidth={3}
          className="cursor-pointer"
          onClick={() => window.api.openConfigWindow()}
        />
        <Input value={search} onChange={handleSearch} autoFocus />
      </section>
      <section className="text-center text-slate-600 text-xs mt-3">未见翁 / sniggiw</section>
    </main>
  )
}
