import { ImageViewerProvider } from "context/ImageViewerContext";

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <ImageViewerProvider>{children}</ImageViewerProvider>;
}
