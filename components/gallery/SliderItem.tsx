import Image from 'next/image'

export const SliderItem = ({ name, image }: any) => {
  return (
    <div className={'flex justify-center gap-4 h-[32rem]'}>
      <div className={'relative h-full'}>
        <Image className={'object-contain h-full w-auto'} width={1000} height={1000} src={image} alt={name} />
        <div className={'absolute bottom-0 left-0 flex justify-center'}>
          <h4 className={'bg-black/60 text-2xl px-2 py-1'}>{name}</h4>
        </div>
      </div>
    </div>
  )
}