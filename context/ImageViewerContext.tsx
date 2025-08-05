"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface GalleryItem {
  name: string;
  image: string;
  type: "monster" | "character";
}

interface ImageViewerContextType {
  isOpen: boolean;
  currentImageIndex: number;
  images: GalleryItem[];
  openImageViewer: (index: number) => void;
  closeImageViewer: () => void;
  goToNextImage: () => void;
  goToPreviousImage: () => void;
  goToImage: (index: number) => void;
  setImages: (images: GalleryItem[]) => void;
}

const ImageViewerContext = createContext<ImageViewerContextType | undefined>(undefined);

export const useImageViewer = () => {
  const context = useContext(ImageViewerContext);
  if (context === undefined) {
    throw new Error("useImageViewer must be used within an ImageViewerProvider");
  }
  return context;
};

interface ImageViewerProviderProps {
  children: ReactNode;
}

export const ImageViewerProvider = ({ children }: ImageViewerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<GalleryItem[]>([]);

  const openImageViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeImageViewer = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const value: ImageViewerContextType = {
    isOpen,
    currentImageIndex,
    images,
    openImageViewer,
    closeImageViewer,
    goToNextImage,
    goToPreviousImage,
    goToImage,
    setImages,
  };

  return <ImageViewerContext.Provider value={value}>{children}</ImageViewerContext.Provider>;
};
