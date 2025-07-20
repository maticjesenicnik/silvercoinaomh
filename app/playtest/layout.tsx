import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Playtest",
  description:
    "Join the playtest for Silver Coin: Age of Monster Hunters. Learn about access methods, game modes, and how you can help shape the game through testing.",
  url: "/playtest",
});

export default function PlaytestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
