import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Meet the Team",
  description:
    "Discover the passionate creators, contributors, and playtesters behind Silver Coin: Age of Monster Hunters. Join the community and be part of the journey.",
  url: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
