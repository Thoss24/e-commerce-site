import classes from "./ProductsFiltersModal.module.css";
import { motion, useAnimate } from "framer-motion";
import Button from "../../components/ui/Button";
import { useEffect } from "react";

const ProductsFiltersModal: React.FC<{
  modalDisplaying: Boolean;
  mensClothing: () => void;
  womansClothing: () => void;
  jewelry: () => void;
  tech: () => void;
  allProducts: () => void;
  closeModal: () => void
}> = (props) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (props.modalDisplaying) {
      animate("#filters", {
        opacity: [0.5, 1],
        x: [-40, -30, -20, -10, 0]
      }, {
        duration: 0.2
      })
    }
  }, [])

  return (
    <div ref={scope} className={classes["filters-modal-container"]}>
      <motion.div whileHover={{ cursor: "pointer" }} onClick={props.closeModal} className={classes.background} />
      <motion.div exit={{ opacity: [1, 0.5], x: [0, -10, -20, -30, -40]}} transition={{ duration: 0.2}} id="filters" className={classes["filters-modal"]}>
        <h2>Filters</h2>
        <Button action={props.mensClothing} name={"Men's Clothing"} />
        <Button action={props.womansClothing} name={"Women's Clothing"} />
        <Button action={props.jewelry} name={"Jewelry"} />
        <Button action={props.tech} name={"Tech"} />
        <Button action={props.allProducts} name={"All Products"} />
      </motion.div>
    </div>
  );
};

export default ProductsFiltersModal;
