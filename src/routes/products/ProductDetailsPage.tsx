import classes from "./ProductDetailModal.module.css";
import { fetchProduct } from "../../utility/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {

  const id = useParams();
  console.log("hello")
  console.log(id)

  // const { data } = useQuery({
  //   queryKey: ["products", "productItem"],
  //   queryFn: () => fetchProduct
  // })

  return (
   <div>
    <h1>Product Detail Page</h1>
   </div>
  );
};

export default ProductDetailsPage;
