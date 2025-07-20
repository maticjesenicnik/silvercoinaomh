import { createMetadata } from "lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Silver Coin: Age of Monster Hunters - Kingdoms",
  description: "Explore the diverse kingdoms of Atosia in Silver Coin: Age of Monster Hunters. Each realm offers unique lore, environments, and challenges.",
  url: "/lore/kingdoms",
});

export default function KingdomsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
