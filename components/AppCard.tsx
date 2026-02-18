interface Props {
  item: {
    title: string
    url: string
    description: string
    icon?: string
  }
  category: string
}

export default function AppCard({ item, category }: Props) {
  return (
    <a
      href={item.url}
      target="_blank"
      className="block bg-white p-4 rounded-xl shadow hover:shadow-md transition"
    >
      <div className="flex items-center gap-4">

        {/* 图标 */}
        <div className="w-12 h-12 flex items-center justify-center">
          {item.icon ? (
            <img
              src={item.icon}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              {item.title[0]}
            </div>
          )}
        </div>

        {/* 内容 */}
        <div className="flex-1">
          <div className="font-semibold">
            {item.title}
          </div>

          <div className="text-xs text-gray-500 mt-1 flex justify-between">
            <span className="bg-blue-50 text-blue-600 px-2 rounded">
              {category}
            </span>
          </div>

          {item.description && (
            <div className="text-sm text-gray-500 mt-2 line-clamp-2">
              {item.description}
            </div>
          )}
        </div>

      </div>
    </a>
  )
}
