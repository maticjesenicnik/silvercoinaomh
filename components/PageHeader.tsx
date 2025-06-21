import Image from "next/image"
import { PageHeaderProps } from "types"

export const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <>
      <title>{title}</title>
      <div className="relative mb-20">
        <Image className="absolute h-full w-full object-cover" src="/cover_art.webp" fill alt="Background" />
        <div className="relative h-full w-full bg-black/40 py-32">
          <h1 className="text-center text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </>
  )
}
