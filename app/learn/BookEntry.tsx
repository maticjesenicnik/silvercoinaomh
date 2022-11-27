import Image from 'next/image'

export const BookEntry = ({ image, title, subtitle, pdf }: any) => {
  // TODO: Pdf viewer, pdf download
  return (
    <div className={'flex flex-col gap-4 items-center'}>
      <h3 className={'text-3xl font-bold'}>{title}</h3>
      <p>{subtitle}</p>

      <a style={{ transformStyle: 'preserve-3d', perspective: '1200px' }} className={'inline-block max-w-md'}>
        <Image className={'flip-effect origin-left transition-transform duration-300'} src={image} alt={title} />
      </a>

      <a href={pdf}>Download PDF</a>
    </div>
  )
}
