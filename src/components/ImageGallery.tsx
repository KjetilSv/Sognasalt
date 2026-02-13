import Image from "next/image";
import { getImagesFromPublicFolder } from "@/lib/getImagesFromPublicFolder";

type ImageGalleryProps = {
  folder: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function ImageGallery({
  folder,
  imageWidth = 800,
  imageHeight = 800
}: ImageGalleryProps) {
  const images = getImagesFromPublicFolder(folder);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.src} className="image-tile">
          <Image
            src={image.src}
            alt={image.alt}
            width={imageWidth}
            height={imageHeight}
            className="image-fit"
          />
        </div>
      ))}
    </div>
  );
}
