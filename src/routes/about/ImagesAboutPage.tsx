import { useQuery } from "@tanstack/react-query";
import classes from "./AboutPage.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { fetchImages } from "../../utility/http";
import { useRef } from "react";

const ImageSection = () => {

  const firstImgRef = useRef<HTMLImageElement>(null);

  const secondImgRef = useRef<HTMLImageElement>(null);

  const thirdImgRef = useRef<HTMLImageElement>(null);

  const heroImgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: heroImgRef
  });

  const heroTextScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const { data: images } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });

  return (
    <div className={classes["images-section"]}>
         <div className={classes['hero-image']}>
        <motion.h2 style={{ scale: heroTextScale, opacity: heroTextOpacity }} initial={{ y: 0 }} className={classes['hero-text']}>
          hero text
        </motion.h2>
        <motion.img src={images && images.stylish_man} />
      </div>
      <div className={classes["about-page-section"]}>
        {images && (
          <motion.img
            ref={firstImgRef}
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, type: "bounce" }}
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
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, type: "bounce" }}
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
            initial={{ opacity: 0, scale: 0.5}}
            whileInView={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5, type: "bounce" }}
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
