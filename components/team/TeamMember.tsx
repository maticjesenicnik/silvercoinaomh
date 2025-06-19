import Image from 'next/image'

interface Social {
  name: string
  image: string
  url: string
}

interface TeamMemberProps {
  name: string
  title: string
  image: string
  bio: string[]
  socials?: Social[]
}

export const TeamMember = ({ name, title, image, bio, socials }: TeamMemberProps) => {
  return (
    <div className="group h-full">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 brightness-75 group-hover:brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm font-medium text-blue-300 mb-3">{title}</p>
          <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-grow">
            {bio.join(' ')}
          </p>

          {/* Social Links */}
          {socials && socials.length > 0 && (
            <div className="flex justify-center gap-3 mt-auto">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                  aria-label={`${name} on ${social.name}`}
                >
                  <Image 
                    src={social.image} 
                    alt={social.name} 
                    width={32} 
                    height={32}
                    className="object-contain brightness-90 hover:brightness-100 transition-all"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}