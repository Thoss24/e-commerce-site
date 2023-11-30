import classes from "./AboutPage.module.css";
import { motion, useTransform, useScroll } from "framer-motion";

const ImageSection = () => {
  const { scrollY } = useScroll();

  // first image
  const firstImageOpacity = useTransform(
    scrollY,
    [200, 300, 400, 4000],
    [0.7, 0.8, 0.9, 1]
  );

  return (
    <div className={classes['images-section']}>
      <div className={classes["about-page-section-one"]}>
        <motion.img
          style={{ opacity: firstImageOpacity }}
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
      <div className={classes["about-page-section-two"]}>
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
        <motion.img
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/clothing-model.jpg?alt=media&token=b7a61a82-9877-4f48-b1ce-8e7c31e8cb26"
          alt="model"
        />
      </div>
      <div className={classes["about-page-section-three"]}>
        <motion.img
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/dresses.jpg?alt=media&token=4795ffd0-ee10-4f65-b2b9-a6527d535f97"
          alt=""
        />
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
