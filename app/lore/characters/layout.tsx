import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Characters",
  description: "Meet the legendary hunters of Silver Coin: Age of Monster Hunters. Learn their unique stories, abilities, and roles in the world of Atosia.",
  url: "/lore/characters",
});

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
