import React from 'react'
import rss from '../../public/json/newsletters.json';
import Image from 'next/image';
import Link from 'next/link';

const Newsletters = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold'>Newsletters</h1>
      <p className='text-xl'>Coming soon!</p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mt-12 ml-12 mr-12">
          {rss.newsletters.map((newsletter) => (
            <Link href={newsletter.url}>
              <div className="bg-white/[.12] rounded-lg shadow-lg p-4 aspect-square pl-0 pr-0 pt-0 motion-safe:animate-fadeIn">
                <img className="w-full h-full object-cover rounded-t-lg" src={"/" + newsletter.image} alt={newsletter.title} />
                <div className="flex flex-col items-start m-1">
                  <small className="text-gray-200 text-left">NEWSLETTER</small>
                  <h2 className="text-xl font-bold text-center">{newsletter.title}</h2>
                  <p className="text-gray-200 text-left">{newsletter.date}</p>
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