export const Navlink = ({ icon, text, href }: { icon: string; text: string; href: string }) => {
  return (
    <a href={href} className={'flex gap-1.5 items-center rounded-md hover:bg-white/10 p-1 transition-all'}>
      <span className="material-icons-outlined text-sm">{icon}</span>
      {text}
    </a>
  )
}
