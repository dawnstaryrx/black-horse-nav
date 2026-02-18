'use client'

import { useState } from "react"
import data from "@/data/sites.json"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import CategoryTabs from "@/components/CategoryTabs"
import AppCard from "@/components/AppCard"
import Footer from "@/components/Footer"

export default function HomePage() {
  const categories = ["全部应用", ...data.categories.map(c => c.name)]

  const [active, setActive] = useState("全部应用")
  const [keyword, setKeyword] = useState("")

  const allItems = data.categories.flatMap(c =>
    c.items.map(item => ({ ...item, category: c.name }))
  )

  const filtered = allItems.filter(item => {
    const matchCategory =
      active === "全部应用" || item.category === active

    const lowerKeyword = keyword.trim().toLowerCase()

    const matchKeyword =
      lowerKeyword === "" ||
      item.title.toLowerCase().includes(lowerKeyword) ||
      item.description?.toLowerCase().includes(lowerKeyword)

    return matchCategory && matchKeyword
  })

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <Header />

      {/* 内容区域 */}
      <main className="flex-1">

        <SearchBar onSearch={setKeyword} />

        <CategoryTabs
          categories={categories}
          active={active}
          onChange={setActive}
        />

        <div
          className="max-w-7xl mx-auto px-4 mt-8 mb-8 grid 
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filtered.map(item => (
            <AppCard
              key={item.url}
              item={item}
              category={item.category}
            />
          ))}
        </div>

      </main>

      <Footer />

    </div>
  )
}
