import Image from 'next/image'
import Link from 'next/link'

const Videos = (): JSX.Element => {
  const videos = require('/json/videos.json')

  return (
    <div className="text-center">
      <title>Videos</title>
      <h1 className="text-4xl font-bold">Videos</h1>
      <p className="text-xl">Coming soon!</p>

      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-12 ml-12 mr-12">
          {videos.videos.map((video: any, index: number) => (
            <div className="rounded-lg shadow-lg p-4 aspect-video pl-0 pr-0 pt-0 motion-safe:animate-fadeIn">
              <Link href={video.url} target="_blank" key={index}>
                <Image
                  className="object-cover rounded-t-lg scale-100 hover:scale-95 ease-in-out duration-500"
                  src={'/' + video.image}
                  alt={video.title}
                  width={640}
                  height={360}
                />
              </Link>
              <div className="flex flex-col pl-3 pr-3 pt-2">
                <Link href={video.url} target="_blank">
                  <p className="text-gray-400 text-start text-xs w-fit">{video.category.join(', ').toUpperCase()}</p>
                  <p className="text-sm font-bold text-left w-fit">{video.title}</p>
                  <p className="text-gray-200 text-right w-fit">{video.date}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Videos
