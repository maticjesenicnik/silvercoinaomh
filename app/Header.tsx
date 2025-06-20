import { useState } from 'react'
import { Navlink } from './Navlink'
import logo from 'public/images/logos/silvercoin.webp'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>()

  return (
    <header className="fixed top-0 z-40 w-full bg-background text-on-background">
      <div className="mx-auto flex flex-wrap justify-between p-4 transition-all">
        <div className={'h-12 w-52'}>
          <Link href={'/'}>
            <Image src={logo} alt={'Logo'} />
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <span className="material-icons-outlined">menu</span>
        </button>

        <nav
          data-open={isOpen}
          className="flex h-0 w-full grow flex-col items-center gap-4 transition-all data-open:h-auto overflow-hidden lg:overflow-visible data-open:pt-4 md:h-auto md:w-auto md:grow-0 md:flex-row"
        >
          <Navlink icon={'home'} text={'Home'} href={'/'} />
          <Navlink icon={'library_books'} text={'Learn'} href={'/learn'} />
          <Navlink icon={'videogame_asset'} text={'Playtest'} href={'/playtest'} />
          <Navlink icon={'image'} text={'Gallery'} href={'/gallery'} />
          <Navlink icon={'rss_feed'} text={'Newsletters'} href={'/newsletters'} />
          <Navlink icon={'explore'} text={'Lore'} href={'/lore/kingdoms'}>
            <Navlink icon={'explore'} text={'Stories'} href={'/lore/stories/'} />
            <Navlink icon={'explore'} text={'Characters'} href={'/lore/characters/'} />
            <Navlink icon={'explore'} text={'Kingdoms'} href={'/lore/kingdoms/'} />
          </Navlink>
          <Navlink icon={'smart_display'} text={'Videos & Podcasts'} href={'/videos/'} />
          <Navlink icon={'groups'} text={'Team'} href={'/team'} />
        </nav>
      </div>
    </header>
  )
}
