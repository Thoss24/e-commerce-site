import { useQuery } from "@tanstack/react-query";
import { fetchGalleryImages } from "../../utility/http";
import { useState } from "react";
import classes from "./AboutPage.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ImageGallery = () => {
  const [currImage, setCurrImage] = useState<number>(0);

  const { data } = useQuery({
    queryKey: ["gallery_images"],
    queryFn: fetchGalleryImages,
  });

  let images = [];

  if (data) {
    for (let url in data) {
      images.push({
        id: url,
        url: data[url],
      });
    }
  }

  const nextImageHandler = () => {
    if (currImage === 2) {
      setCurrImage(0);
    } else {
      setCurrImage((state) => {
        return (state += 1);
      });
    }
  };

  const backImageHandler = () => {
    if (currImage === 0) {
        setCurrImage(2);
      } else {
        setCurrImage((state) => {
          return (state -= 1);
        });
      }
  };

  if (images.length > 0) {
    console.log(images[currImage])
  }

  return (
<div className={classes["gallery-image-container"]}>
  {images.length !== 0 ? (
    <img
      className={classes["gallery-image"]}
      src={images[currImage].url}
      alt="Gallery"
    />
  ) : (
    <p className={classes["error-message"]}>Failed to load image gallery.</p>
  )}
  
  <button className={classes['prev-gallery-button']} onClick={backImageHandler}>
    <FaArrowLeft />
  </button>
  
  <button className={classes['next-gallery-button']} onClick={nextImageHandler}>
    <FaArrowRight />
  </button>
</div>
  );
};

export default ImageGallery;
