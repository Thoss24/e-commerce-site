import { useQuery } from "@tanstack/react-query";
import classes from "./AboutPage.module.css";
import { motion, useInView } from "framer-motion";
import { fetchImages } from "../../utility/http";
import { useRef } from "react";

const ImageSection = () => {

  const firstImgRef = useRef<HTMLImageElement>(null);
  const firstImgInView = useInView(firstImgRef, { once: true});

  const secondImgRef = useRef<HTMLImageElement>(null);
  const secondImgInView = useInView(firstImgRef, { once: true });

  const thirdImgRef = useRef<HTMLImageElement>(null);
  const thirdImgInView = useInView(firstImgRef, { once: true });

  const { data: images } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });

  return (
    <div className={classes["images-section"]}>
      <div className={classes["about-page-section"]}>
        {images && (
          <motion.img
            ref={firstImgRef}
            initial={{ opacity: firstImgInView ? 1 : 0, scale: firstImgInView ? 1 : 0.5 }}
            animate={{ opacity: firstImgInView ? 1 : 0, scale: firstImgInView ? 1 : 0.5}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className={classes.image}
            src={images && images.pink}
            alt=""
          />
        )}
        <div className={classes["about-page-copy"]}>
          <h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            vel.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            soluta autem, dicta repellat illo tenetur, officia sapiente ipsum et
            similique minus modi itaque fugit id!
          </p>
        </div>
      </div>
      <div className={classes["about-page-section"]}>
        {images && (
          <motion.img
            ref={secondImgRef}
            className={classes.image}
            src={images && images.clothing_model}
            alt="model"
          />
        )}
        <div className={classes["about-page-copy"]}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            eaque.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ipsam quia magnam culpa accusamus, reiciendis, corrupti in, dolore
            natus id nesciunt minus ad rem autem!
          </p>
        </div>
      </div>
      <div className={classes["about-page-section"]}>
        {images && (
          <motion.img
            ref={thirdImgRef}
            className={classes.image}
            src={images && images.dresses}
            alt=""
          />
        )}
        <div className={classes["about-page-copy"]}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            inventore.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
            optio repellendus quam, quod eius nulla tempora nihil accusamus
            eligendi reiciendis nam placeat suscipit, et sequi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
