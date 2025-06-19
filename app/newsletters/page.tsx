import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageHeader } from 'components/PageHeader'

const Newsletters = (): JSX.Element => {
  const rss = require('data/json/newsletters.json')

  return (
    <div className="text-center">
      <PageHeader title={'Newsletters'} />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mt-12 ml-12 mr-12">
          {rss.newsletters.map((newsletter: any, index: number) => (
            <Link href={newsletter.url} target="_blank" key={index}>
              <div className="bg-white/[.12] rounded-lg shadow-lg p-4 aspect-square pl-0 pr-0 pt-0 motion-safe:animate-fadeIn">
                <Image
                  className="w-full h-full object-cover rounded-t-lg"
                  src={'/' + newsletter.image}
                  alt={newsletter.title}
                  width={400}
                  height={400}
                />
                <div className="flex flex-col">
                  <div className="flex flex-col pl-3 pr-3 pt-2">
                    <p className="text-gray-200 text-start">NEWSLETTER</p>
                    <p className="text-xl font-bold text-center">{newsletter.title}</p>
                    <p className="text-gray-200 text-right">{newsletter.date}</p>
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