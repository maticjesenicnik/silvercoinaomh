import Image from 'next/image'
import bgImage from '../public/cover_art.webp'

export const PageHeader = ({ title }: any) => {
  return (
    <>
      <title>{title}</title>
      <div className={'relative mb-20'}>
        <Image className={'absolute w-full h-full object-cover'} src={bgImage} alt={'Background'} />
        <div className={'relative w-full h-full bg-black/40 py-32'}>
          <h1 className={'text-5xl font-bold text-center'}>{title}</h1>
        </div>
      </div>
    </>
  )
}
