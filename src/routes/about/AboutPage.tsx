import classes from "./AboutPage.module.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ImageSection from "./ImagesAboutPage";

const AboutPage = () => {
  const { scrollY } = useScroll();
  // hero image
  const heroImageOpacity = useTransform(scrollY, [0, 1100, 1300, 1500, 1600], [1, 0.9, 0.8, 0.7, 0.4]);

  const heroTextRef = useRef<HTMLHRElement>(null);
  const aboutContainer = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: aboutContainer,
    target: heroTextRef,
    offset: ["end end", "end start"]
  });

  // const heroTextOpacity = useTransform(scrollYProgress, [0], [])

  return (
    <div ref={aboutContainer} className={classes.about}>
      <div className={classes['hero-image']}>
        <motion.h2 ref={heroTextRef} style={{ opacity: scrollYProgress }} className={classes['hero-text']}>
          hero text
        </motion.h2>
        <motion.img src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/stylish-man.jpg?alt=media&token=1a61891a-15be-460d-b74b-68ae8730e076" />
      </div>
        <ImageSection />
    </div>
  );
};

export default AboutPage;
