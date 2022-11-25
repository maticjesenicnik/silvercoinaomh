import Image from 'next/image'

export const Footer = () => {
  const socialsData = require('/json/socials.json')

  return (
    <footer
      className={'bg-background text-on-background flex justify-between flex-col md:flex-row gap-4 items-center p-5'}
    >
      <div className={'flex gap-4'}>
        <Image height={100} width={100} src={'/images/logos/bona_fide.webp'} alt={'Bona Fide'} />
        <Image height={100} width={200} src={'/images/logos/gea_college.webp'} alt={'Gea College'} />
      </div>

      <a className={'text-center hover:text-gray-400'} href={'/'}>
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
