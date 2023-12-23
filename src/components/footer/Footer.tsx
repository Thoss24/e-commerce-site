import { fetchImages } from "../../utility/http";
import classes from "./Footer.module.css";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const { data } = useQuery({
    queryKey: ["footer-logo"],
    queryFn: fetchImages,
  });

  return (
    <div className={classes.footer}>
      <a href="https://github.com/Thoss24?tab=overview&from=2023-12-01&to=2023-12-23" target="_blank" rel="noopener">
        <img src={data && data.github_logo} alt="" />
      </a>
    </div>
  );
};

export default Footer;
