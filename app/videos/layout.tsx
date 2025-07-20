import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Videos & Podcasts",
  description:
    "Explore gameplay videos, development insights, and behind-the-scenes content for Silver Coin: Age of Monster Hunters. Browse by category and stay updated.",
  url: "/videos",
});

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
