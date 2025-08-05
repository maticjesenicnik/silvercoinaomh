import { ImageViewerProvider } from "context/ImageViewerContext";
import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Gallery",
  description:
    "Browse the official art gallery of Silver Coin: Age of Monster Hunters. Discover monsters, characters, and world-building illustrations that bring Atosia to life.",
  url: "/gallery",
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <ImageViewerProvider>{children}</ImageViewerProvider>;
}
