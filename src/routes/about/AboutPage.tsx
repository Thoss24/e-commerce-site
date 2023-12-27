import classes from "./AboutPage.module.css";
import ImageSection from "./ImagesAboutPage";
import ImageGallery from "./ImageGallery";

const AboutPage = () => {
  return (
    <div className={classes.about}>
      <ImageSection />
      <ImageGallery />
    </div>
  );
};

export default AboutPage;
