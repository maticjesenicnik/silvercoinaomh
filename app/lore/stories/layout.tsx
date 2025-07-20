import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Stories",
  description: "Dive into immersive tales from the world of Silver Coin: Age of Monster Hunters. Explore the rich lore and uncover secrets of Atosia.",
  url: "/lore/stories",
});

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
