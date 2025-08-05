import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Learn",
  description:
    "Learn how to play Silver Coin: Age of Monster Hunters through videos, rulebooks, and quick references. Everything you need to master the game in one place.",
  url: "/learn",
});

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
