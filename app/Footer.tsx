import Image from 'next/image'

export const Footer = () => {
  const socialsData = require('/json/socials.json')

  return (
    <footer
      className={'bg-background text-on-background flex justify-between flex-col md:flex-row gap-4 items-center p-5'}
    >
      <div className={'flex gap-4'}>
        <a href="https://boardgamegeek.com/boardgamepublisher/50038/bona-fide-games">
          <Image height={100} width={100} src={'/images/logos/bona_fide.webp'} alt={'Bona Fide'} />
        </a>
        <a href="https://gea-college.si/">
          <Image height={100} width={200} src={'/images/logos/gea_college.webp'} alt={'Gea College'} />
        </a>
      </div>

      <a className={'text-center hover:text-gray-400'} href={'/terms-and-conditions'}>
        Terms and conditions
      </a>

      <div className={'flex justify-center flex-col items-center'}>
        <div className={'flex gap-1 flex-wrap'}>
          {socialsData.socials.map((el: any, index: number) => {
            return (
              <a
                key={index}
                className={'flex justify-center items-center hover:opacity-60 transition-all'}
                href={el.url}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Image width={60} height={60} src={el.image} alt={el.name} />
              </a>
            )
          })}
        </div>
        <a className={'hover:text-gray-400'} href={'mailto:silvercoinaomh@gmail.com'}>
          silvercoinaomh@gmail.com
        </a>
      </div>
    </footer>
  )
}
