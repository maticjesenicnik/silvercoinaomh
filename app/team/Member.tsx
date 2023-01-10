import Image from 'next/image'

export const Member = ({ name, title, url, info, socials }: any) => {
  return (
    <div className="flex flex-col items-center flex-start h-full overflow-hidden bg-black shadow-xl shadow-stone-800 bg-blend-darken rounded-md">
      <div className="overflow-hidden mb-2">
        <Image
          className="object-cover transform transition-all duration-300 scale-100 hover:scale-110 brightness-50 aspect-square"
          src={url}
          alt={name}
          width={600}
          height={600}
        />
      </div>
      <div className="p-4">
        <h1 className="text-center text-gray-100 text-xl">{name}</h1>
        <h2 className="text-center text-gray-100 text-lg mb-2">{title}</h2>
        <p className="text-center text-gray-100 text-sm">{info.join('')}</p>
        {socials && socials.length > 0 ? (
          <div className="flex gap-2 bg-red-600">
            {socials.map((social: any, index: number) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer">
                <span className="material-icons-outlined text-sm">{social.icon}</span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
