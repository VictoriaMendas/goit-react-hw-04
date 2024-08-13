import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.photo}>
      {/* Набір елементів списку із зображеннями */}
      {images.map((image) => {
        return (
          <li key={image.id} name={image.username}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
}
