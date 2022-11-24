import React from 'react'
import rss from '../../public/json/newsletters.json';
import Image from 'next/image';
import Link from 'next/link';

const Newsletters = () : JSX.Element => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold'>Newsletters</h1>
      <p className='text-xl'>Coming soon!</p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mt-12 ml-12 mr-12">
          {rss.newsletters.map((newsletter) => (
            <Link href={newsletter.url} target="_blank">
              <div className="bg-white/[.12] rounded-lg shadow-lg p-4 aspect-square pl-0 pr-0 pt-0 motion-safe:animate-fadeIn">
                <Image className="w-full h-full object-cover rounded-t-lg" src={"/" + newsletter.image} alt={newsletter.title} width={400} height={400}/>
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