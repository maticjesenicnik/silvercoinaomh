import { useState } from 'react'
import { Navlink } from './Navlink'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>()

  return (
    <header className="fixed top-0 z-40 w-full bg-background text-on-background">
      <div className="mx-auto flex flex-wrap justify-between p-4 transition-all">
        <div>
          <img className={'h-12'} src={'/images/logos/silvercoin.png'} alt={'Logo'} />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <span className="material-icons-outlined">menu</span>
        </button>

        <nav
          data-open={isOpen}
          className="flex h-0 w-full grow flex-col items-center gap-4 overflow-hidden transition-all data-open:h-52 data-open:pt-4 md:h-auto md:w-auto md:grow-0 md:flex-row"
        >
          <Navlink icon={'home'} text={'Home'} href={'/'} />
          <Navlink icon={'library_books'} text={'Learn'} href={'/'} />
          <Navlink icon={'videogame_asset'} text={'Playtest'} href={'/'} />
          <Navlink icon={'image'} text={'Gallery'} href={'/'} />
          <Navlink icon={'rss_feed'} text={'Newsletters'} href={'/newsletters/'} />
          <Navlink icon={'explore'} text={'World & Lore'} href={'/'} />
          <Navlink icon={'smart_display'} text={'Videos & Podcasts'} href={'/'} />
          <Navlink icon={'groups'} text={'Team'} href={'/'} />
        </nav>
      </div>
    </header>
  )
}
