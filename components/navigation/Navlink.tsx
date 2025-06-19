import Link from 'next/link'

interface NavlinkProps {
  icon: string
  text: string
  href: string
  children?: React.ReactNode
  mobile?: boolean
  submenu?: boolean
}

export const Navlink = ({ icon, text, href, children, mobile = false, submenu = false }: NavlinkProps) => {
  if (mobile) {
    return (
      <Link 
        href={href} 
        className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors ${
          submenu ? 'pl-8 text-gray-300' : ''
        }`}
      >
        <span className="material-icons-outlined text-lg">{icon}</span>
        <span className="font-medium">{text}</span>
      </Link>
    )
  }

  return (
    <div className="group relative">
      <Link 
        href={href} 
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
      >
        <span className="material-icons-outlined text-lg">{icon}</span>
        <span>{text}</span>
        {children && (
          <span className="material-icons-outlined text-sm ml-1 group-hover:rotate-180 transition-transform duration-200">
            expand_more
          </span>
        )}
      </Link>

      {children && (
        <div className="absolute top-full left-0 mt-2 min-w-48 bg-background/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}