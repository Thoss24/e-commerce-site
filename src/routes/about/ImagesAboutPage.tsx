import { useQuery } from "@tanstack/react-query";
import classes from "./AboutPage.module.css";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { fetchImages } from "../../utility/http";
import { useRef } from "react";

const ImageSection = () => {

  const firstImgRef = useRef<HTMLImageElement>(null);

  const secondImgRef = useRef<HTMLImageElement>(null);

  const thirdImgRef = useRef<HTMLImageElement>(null);

  const heroImgContainerRef = useRef<HTMLDivElement>(null);

  const heroTextRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroImgContainerRef,
    offset: ["0 0.05", "end start"]
  });

  // offset: [0 ] = the start of the target
  // offset: [ 1] = the end of the container

  //const heroTextScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const { data: images } = useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
  });

  return (
    <div className={classes["images-section"]}>
    <motion.div ref={heroImgContainerRef} className={classes['hero-image']}>
      {images && (
        <motion.div className={classes['hero-text-container']} style={{ opacity: heroTextOpacity }}>
          <motion.h2 className={classes['hero-text']}>
            Fashion || Tech || Jewelry & Much More
          </motion.h2>
        </motion.div>
      )}
      <motion.img src={images?.stylish_man} alt="Stylish Man" />
    </motion.div>
    
    {['pink', 'clothing_model', 'dresses'].map((imageKey, index) => (
      <div key={index} className={classes["about-page-section"]}>
        {images && (
          <motion.img
            ref={index === 0 ? firstImgRef : index === 1 ? secondImgRef : thirdImgRef}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "bounce" }}
            className={classes.image}
            src={images[imageKey]}
            alt={imageKey}
          />
        )}
        <div className={classes["about-page-copy"]}>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione soluta autem, dicta repellat illo tenetur!</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default ImageSection;
