export const Navlink = ({ icon, text, href, children }: any) => {
  return (
    <div className={'group relative'}>
      <a href={href} className={'flex gap-1.5 items-center rounded-md hover:bg-white/10 p-1 transition-all'}>
        <span className="material-icons-outlined text-sm">{icon}</span>
        {text}
      </a>

      {children && children.length > 0 ? (
        <div className="hidden group-hover:flex flex-col gap-1 border border-white/5 absolute top-[100%] left-0 z-10 bg-background p-2 rounded-md shadow-md">
          {children}
        </div>
      ) : null}
    </div>
  )
}
