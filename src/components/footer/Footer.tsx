import classes from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

  return (
    <div className={classes.footer}>
      <a href="https://github.com/Thoss24?tab=overview&from=2023-12-01&to=2023-12-23" target="_blank" rel="noopener">
        <FaGithub size={24}/>
      </a>
    </div>
  );
};

export default Footer;
