'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navlink } from '../navigation/Navlink'
import logo from 'public/images/logos/silvercoin.webp'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out text-on-background ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-white/20 shadow-lg' 
          : 'bg-background/95 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
            isScrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-20'
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <div 
                className={`relative transition-all duration-300 ease-in-out ${
                  isScrolled 
                    ? 'h-8 w-32 lg:h-9 lg:w-36' 
                    : 'h-10 w-40 lg:h-12 lg:w-48'
                }`}
              >
                <Image 
                  src={logo} 
                  alt="Silver Coin: Age of Monster Hunters" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Navlink icon="home" text="Home" href="/" />
            <Navlink icon="library_books" text="Learn" href="/learn" />
            <Navlink icon="videogame_asset" text="Playtest" href="/playtest" />
            <Navlink icon="image" text="Gallery" href="/gallery" />
            <Navlink icon="rss_feed" text="Newsletters" href="/newsletters" />
            <Navlink icon="explore" text="Lore" href="/lore/kingdoms">
              <Navlink icon="auto_stories" text="Stories" href="/lore/stories/" />
              <Navlink icon="person" text="Characters" href="/lore/characters/" />
              <Navlink icon="public" text="Kingdoms" href="/lore/kingdoms/" />
            </Navlink>
            <Navlink icon="smart_display" text="Videos & Podcasts" href="/videos/" />
            <Navlink icon="groups" text="Team" href="/team" />
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-icons-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-screen opacity-100 pb-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-1 pt-4 border-t border-white/10">
            <Navlink icon="home" text="Home" href="/" mobile />
            <Navlink icon="library_books" text="Learn" href="/learn" mobile />
            <Navlink icon="videogame_asset" text="Playtest" href="/playtest" mobile />
            <Navlink icon="image" text="Gallery" href="/gallery" mobile />
            <Navlink icon="rss_feed" text="Newsletters" href="/newsletters" mobile />
            
            {/* Mobile Lore Section */}
            <div className="space-y-1">
              <Navlink icon="explore" text="Lore" href="/lore/kingdoms" mobile />
              <div className="pl-4 space-y-1">
                <Navlink icon="auto_stories" text="Stories" href="/lore/stories/" mobile submenu />
                <Navlink icon="person" text="Characters" href="/lore/characters/" mobile submenu />
                <Navlink icon="public" text="Kingdoms" href="/lore/kingdoms/" mobile submenu />
              </div>
            </div>
            
            <Navlink icon="smart_display" text="Videos & Podcasts" href="/videos/" mobile />
            <Navlink icon="groups" text="Team" href="/team" mobile />
          </nav>
        </div>
      </div>
    </header>
  )
}