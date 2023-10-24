import classes from "./ProductDetailModal.module.css";

const ProductDetailModal: React.FC<{ hide: () => void }> = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.hide} />
      <div className={classes.modal}>
        <h1>Test</h1>
      </div>
    </>
  );
};

export default ProductDetailModal;
