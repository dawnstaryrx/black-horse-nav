'use client'

import { useState } from "react"

interface Props {
  onSearch: (keyword: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  const [keyword, setKeyword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(keyword)
  }

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <form onSubmit={handleSubmit} className="flex shadow rounded-full overflow-hidden">
        <input
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="搜索..."
          className="flex-1 px-6 py-3 outline-none"
        />
        <button className="bg-blue-500 text-white px-6">
          搜索
        </button>
      </form>
    </div>
  )
}
