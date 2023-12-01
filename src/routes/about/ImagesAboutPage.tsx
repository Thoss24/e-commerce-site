import { useQuery } from "@tanstack/react-query";
import classes from "./AboutPage.module.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { fetchImages } from "../../utility/http";
import { useRef } from "react";

const ImageSection = () => {

  const imageSectionOne = useRef<HTMLDivElement>(null);

  const imageSectionTwo = useRef<HTMLDivElement>(null);

  const imageSectionThree = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageSectionOne,
    offset: ["0 1", "1 1"] // where 0 is the bottom of viewport and 1 is top of viewport of target the animation starts and ends when the bottom of the viewport goes x% beyond end of target starting from top of target
  });

  const { scrollYProgress: scrollYSectionTwo } = useScroll({
    target: imageSectionOne,
    offset: ["0 1", "1.90 1"] 
  });

  const { scrollYProgress: scrollYSectionThree } = useScroll({
    target: imageSectionTwo,
    offset: ["0 1", "1.90 1"] 
  });

  const { data: images } = useQuery({ // Figure out why these urls aren't working!!
    queryKey: ['images'],
    queryFn: fetchImages
  });

  return (
    <div className={classes['images-section']}>
      <div ref={imageSectionOne} className={classes["about-page-section"]}>
        <motion.img
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress
          }}
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/hero.jpg?alt=media&token=0ef28aaf-ce03-409c-a451-98dd0b0f0bfd"
          alt=""
        />
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
      <div ref={imageSectionTwo} className={classes["about-page-section"]}>
        { images &&
      <motion.img
        style={{
          opacity: scrollYSectionTwo,
          scale: scrollYSectionTwo
        }}
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/clothing-model.jpg?alt=media&token=b7a61a82-9877-4f48-b1ce-8e7c31e8cb26"
          alt="model"
        />
      }
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
      <div ref={imageSectionThree} className={classes["about-page-section"]}>
        { images && 
        <motion.img
        style={{
          opacity: scrollYSectionThree,
          scale: scrollYSectionThree
        }}
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/dresses.jpg?alt=media&token=4795ffd0-ee10-4f65-b2b9-a6527d535f97"
          alt=""
        />
        }
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
