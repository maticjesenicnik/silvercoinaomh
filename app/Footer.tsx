import Image from 'next/image'

export const Footer = () => {
  return (
    <footer
      className={'bg-background text-on-background flex justify-between flex-col md:flex-row gap-4 items-center p-5'}
    >
      <div className={'flex gap-4'}>
        <Image height={100} width={100} src={'/images/logos/bona_fide.png'} alt={'Bona Fide'} />
        <Image height={100} width={200} src={'/images/logos/gea_college.png'} alt={'Gea College'} />
      </div>

      <a className={'text-center'} href={'/'}>
        Terms and conditions
      </a>

      <div className={'flex justify-center flex-col items-center'}>
        <div className={'flex gap-1 flex-wrap'}>
          <a
            className={'flex justify-center items-center hover:opacity-80 transition-all'}
            href={'https://www.facebook.com/groups/399997464231407'}
          >
            <Image width={60} height={60} src={'/images/socials/fb.png'} alt={'Facebook'} />
          </a>
          <a
            className={'flex justify-center items-center hover:opacity-80 transition-all'}
            href={'https://www.instagram.com/silvercoinaomh/'}
          >
            <Image width={60} height={60} src={'/images/socials/ig.png'} alt={'Instagram'} />
          </a>
          <a
            className={'flex justify-center items-center hover:opacity-80 transition-all'}
            href={'https://boardgamegeek.com/boardgame/312682/silver-coin-age-monster-hunters'}
          >
            <Image width={100} height={60} src={'/images/socials/bgg.png'} alt={'BGG'} />
          </a>
          <a
            className={'flex justify-center items-center hover:opacity-80 transition-all'}
            href={'https://discord.gg/NfQqrSgW3u'}
          >
            <Image width={60} height={60} src={'/images/socials/discord.png'} alt={'Discord'} />
          </a>
          <a
            className={'flex justify-center items-center hover:opacity-80 transition-all'}
            href={'https://www.youtube.com/channel/UCJubiQxl7DSBweyIGmaK6-A'}
          >
            <Image width={60} height={60} src={'/images/socials/yt.png'} alt={'YouTube'} />
          </a>
        </div>
        <a href={'mailto:silvercoinaomh@gmail.com'}>silvercoinaomh@gmail.com</a>
      </div>
    </footer>
  )
}
