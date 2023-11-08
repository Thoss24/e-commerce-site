import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from "./ProductPage.module.css";
import { useState, useRef, useEffect } from "react";
import { FetchedProductItem } from "../../models/FetchedProductItem";

const ProductPage = () => {

  const [product, setProduct] = useState<FetchedProductItem[]>([]);

  const userSearch = useRef<HTMLInputElement>(null);

  const { data, isLoading, isFetched, isRefetching } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    setProduct(data);
  }, [data]);

  const searchResultsHandler = () => {
    console.log(userSearch.current!.value);
    let results = data.filter((item: FetchedProductItem) => {
      return item.title
        .toLowerCase()
        .includes(userSearch.current!.value.toLowerCase());
    });
    if (userSearch.current !== null) {
      setProduct(results);
    } else {
      return;
    }
  };

  const filterMensClothingHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
        return item.category === "men's clothing"
    });
    setProduct(results)
  }

  const filterWomansClothingHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
        return item.category === "women's clothing"
    });
    setProduct(results)
  }

  const filterJewelryHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
        return item.category === "jewelery"
    });
    setProduct(results)
  }

  const filterElectronicsHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
        return item.category === "electronics"
    });
    setProduct(results)
  }

  const filterAllProducts = () => {
    setProduct(data)
  }

  return (
    <>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={searchResultsHandler}
          ref={userSearch}
        />
        <h3>Filters</h3>
        <button onClick={filterMensClothingHandler}>Mens Clothing</button>
        <button onClick={filterWomansClothingHandler}>Womans Clothing</button>
        <button onClick={filterJewelryHandler}>Jewelry</button>
        <button onClick={filterElectronicsHandler}>Tech</button>
        <button onClick={filterAllProducts}>All products</button>
      </div>
      <div className={classes.products}>
        {isFetched && product && product.length === 0 && !isRefetching && "No results found."}
        {isLoading && "Loading..."}
        {product
          && product.map((item: ProductItemType) => (
              <ProductItem
                key={item.id}
                id={item.id}
                name={item.title}
                imageUrl={item.image}
                itemDescription={item.description}
              />
            ))
          }
      </div>
    </>
  );
};

export default ProductPage;
