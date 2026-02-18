interface Props {
  categories: string[]
  active: string
  onChange: (c: string) => void
}

export default function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
      {categories.map(cat => (
        <span
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-4 py-1 rounded-full cursor-pointer text-sm
            ${active === cat
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"}
          `}
        >
          {cat}
        </span>
      ))}
    </div>
  )
}
