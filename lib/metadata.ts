import { Metadata } from "next";

export function createMetadata({ title, description, url }: { title: string; description: string; url: string }): Metadata {
  return {
    title,
    description,
    keywords: [
      "Silver Coin",
      "Age of Monster Hunters",
      "board game",
      "Kickstarter board game",
      "eurogame",
      "fantasy board game",
      "monster hunting game",
      "crowdfunding board game",
      "tabletop game",
      "Atosia",
      "stretch goals",
      "gameplay video",
      "playtest",
    ],
    openGraph: {
      title,
      description,
      url,
      siteName: "Silver Coin: Age of Monster Hunters",
      images: [
        {
          url: "/cover_art.webp",
          width: 1200,
          height: 630,
          alt: "Silver Coin: Age of Monster Hunters - Cover Art",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/cover_art.webp"],
    },
    metadataBase: new URL("https://www.silvercoinaomh.com"),
  };
}
