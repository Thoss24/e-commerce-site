import { useQuery } from "@tanstack/react-query";
import { fetchGalleryImages } from "../../utility/http";
import { useState } from "react";
import classes from "./AboutPage.module.css";

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

  return (
    <div className={classes[".gallery-image-container"]}>
      <img
        className={classes["gallery-image"]}
        src={images[currImage].url}
        alt=""
      />
      <button onClick={nextImageHandler}>Next</button>
      <button onClick={backImageHandler}>Back</button>
    </div>
  );
};

export default ImageGallery;
