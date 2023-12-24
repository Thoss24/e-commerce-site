import classes from "./ContactPage.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className={classes["contacts-page"]}>
      <h1>Contact Information</h1>
      <div className={classes.socials}>
        <a rel="noopener" href="https://github.com/Thoss24" target="_blank">
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: [0.8, 0.9, 1] }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <FaGithub size={30} />
          </motion.div>
        </a>
        <a
          rel="noopener"
          href="https://www.linkedin.com/in/tom-fogarty-7bb722235/"
          target="_blank"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: [0.8, 0.9, 1], color: "#0E76A8" }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <FaLinkedin size={30} />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
