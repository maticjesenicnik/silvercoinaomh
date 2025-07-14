export type CharactersType = {
  characters: {
    name: string
    image: string
    logo: string
    description: string[]
  }[]
}

export type GalleryType = {
  characters: {
    name: string
    image: string
  }[]
  monsters: {
    name: string
    image: string
  }[]
}

export type KingdomsType = {
  world: {
    image: string
    name: string
  }
  kingdoms: {
    name: string
    image: string
    description: string[]
  }[]
}

export type NewsletterType = {
  number: number
    title: string
    preview: string
    date: string
    url: string
    image: string
}

export type NewslettersType = {
  newsletters: NewsletterType[]
}

export type PodcastsType = {
  podcasts: {
    title: string
    episode: string
    description: string
    url: string
  }[]
}

export type SocialsType = {
  socials: Social[]
}

export type StoriesType = {
  stories: {
    title: string
    chapters: string[]
  }[]
}

export type TeamType = {
  members: {
    name: string
    title: string
    url: string
    info: string[]
    socials?: {
      name: string
      image: string
      url: string
    }[]
  }[]
  helpers: {
    name: string
    role: string
  }[]
  playtesters: string[]
}

export type VideosType = {
  videos: {
    title: string
    category: string[]
    description: string
    url: string
    image: string
  }[]
}

export type TeamHelperProps = {
  name: string
  role: string
}

export type TeamMemberProps = {
  name: string
  title: string
  image: string
  bio: string[]
  socials?: Social[]
}

type Social = {
  name: string
  image: string
  url: string
}

export type NavlinkProps = {
  icon: string
  text: string
  href: string
  children?: React.ReactNode
  mobile?: boolean
  submenu?: boolean
}

export type TeamSectionProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

export type PageHeaderProps = {
  title: string
}