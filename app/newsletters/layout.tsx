import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Newsletters",
  description:
    "Follow the development journey of Silver Coin: Age of Monster Hunters with detailed newsletters spanning 7 years of design, updates, and behind-the-scenes insights.",
  url: "/newsletters",
});

export default function NewslettersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
