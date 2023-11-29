import classes from './AboutPage.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';

const AboutPage = () => {

    const { scrollY } = useScroll();
    // image 1
    const imageOneOpacity = useTransform(scrollY, [0, 100, 200, 300], [1, 0.7, 0.4, 0.3]);
    // image 2
    const imageTwoX = useTransform(scrollY, [0, 100, 200, 300], [0, 40, 60, 80]);
    // image 3
    const imageThreeScale = useTransform(scrollY, [0, 100, 200, 300], [1, 0.8, 0.6, 0.4])

    return (
        <div className={classes.about}>
            <h1>About</h1>
            <motion.img style={{ opacity: imageOneOpacity}} className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/clothing-model.jpg?alt=media&token=b7a61a82-9877-4f48-b1ce-8e7c31e8cb26" alt="model" />
            <motion.img style={{ x: imageTwoX }} className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/dresses.jpg?alt=media&token=4795ffd0-ee10-4f65-b2b9-a6527d535f97" alt="" />
            <motion.img style={{ scale: imageThreeScale}} className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/react-http-6cb96.appspot.com/o/stylish-man.jpg?alt=media&token=1a61891a-15be-460d-b74b-68ae8730e076" alt="" />
        </div>
    )
};

export default AboutPage;