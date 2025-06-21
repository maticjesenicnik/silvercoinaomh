import Image from "next/image"
import Link from "next/link"

import { PageHeader } from "components/PageHeader"
import { NEWSLETTERS } from "data/newsletters"

const Newsletters = () => {
  return (
    <div className="text-center">
      <PageHeader title={"Newsletters"} />

      <div className="container mx-auto">
        <div className="ml-12 mr-12 mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {NEWSLETTERS.newsletters.map((newsletter: any, index: number) => (
            <Link href={newsletter.url} target="_blank" key={index}>
              <div className="motion-safe:animate-fadeIn aspect-square rounded-lg bg-white/[.12] p-4 pl-0 pr-0 pt-0 shadow-lg">
                <Image className="h-full w-full rounded-t-lg object-cover" src={"/" + newsletter.image} alt={newsletter.title} width={400} height={400} />
                <div className="flex flex-col">
                  <div className="flex flex-col pl-3 pr-3 pt-2">
                    <p className="text-start text-gray-200">NEWSLETTER</p>
                    <p className="text-center text-xl font-bold">{newsletter.title}</p>
                    <p className="text-right text-gray-200">{newsletter.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Newsletters
