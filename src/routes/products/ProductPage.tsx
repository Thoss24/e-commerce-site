import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from "./ProductPage.module.css";
import { useState, useRef, useEffect } from "react";
import { FetchedProductItem } from "../../models/FetchedProductItem";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/ui/Button";
import ProductsFiltersModal from "./ProductsFiltersModal";

const ProductPage = () => {

  const [product, setProduct] = useState<FetchedProductItem[]>([]);

  const [filtersModalDisplaying, setFiltersModalDisplaying] = useState<Boolean>(false);

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

  const toggleFiltersDropdown = () => {
    if (filtersModalDisplaying) {
      setFiltersModalDisplaying(false)
    } else setFiltersModalDisplaying(true)
    console.log(filtersModalDisplaying)
  }

  const filtersDropdownButton = (
    <div className={classes['filters-dropdown']}>
    <Button action={toggleFiltersDropdown} name={"Filters"}/>
    </div>
  );

  const filtersModal = (
    <ProductsFiltersModal />
  );

  return (
    <div className={classes['page-container']}>
    {filtersModalDisplaying && filtersModal}
      {filtersDropdownButton}
      <div className={classes['search-container']}>
      <div className={classes.search}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={searchResultsHandler}
          ref={userSearch}
        />
        <div className={classes['filters-container']}>
        <h3>Filters</h3>
        <div className={classes['filter-options']}>
        <AnimatePresence>
        <Button name={'Mens Clothing'} action={filterMensClothingHandler} />
        <Button name={'Women\'s Clothing'} action={filterWomansClothingHandler} />
        <Button name={'Jewelry'} action={filterJewelryHandler} />
        <Button name={'Tech'} action={filterElectronicsHandler} />
        <Button name={'All products'} action={filterAllProducts} />
        </AnimatePresence>
        </div>
        </div>
      </div>
      </div>
      <div className={classes['products-container']}>
      <motion.ul animate={{ transition: { staggerChildren: 0.2}}} className={classes.products}>
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
      </motion.ul>
      </div>
    </div>
  );
};

export default ProductPage;
