interface Site {
  title: string
  url: string
  description: string
}

interface SiteGridProps {
  sites: Site[]
}

export default function SiteGrid({ sites }: SiteGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sites.map(site => (
        <a
          key={site.url}
          href={site.url}
          target="_blank"
          className="p-4 bg-white rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="font-semibold text-gray-800">{site.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {site.description}
          </p>
        </a>
      ))}
    </div>
  )
}
