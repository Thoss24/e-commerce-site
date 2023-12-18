import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../utility/http";
import ProductItem from "../../components/products/ProductItem";
import { ProductItem as ProductItemType } from "../../models/ProductItem";
import classes from "./ProductPage.module.css";
import { useState, useRef, useEffect } from "react";
import { FetchedProductItem } from "../../models/FetchedProductItem";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Button from "../../components/ui/Button";
import ProductsFiltersModal from "./ProductsFiltersModal";

const ProductPage = () => {
  const [product, setProduct] = useState<FetchedProductItem[]>([]);

  const [currentFilter, setCurrentFilter] = useState<string>("");

  const [filtersModalDisplaying, setFiltersModalDisplaying] =
    useState<Boolean>(false);

  const productsSection = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: productsSection
  });;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const userSearch = useRef<HTMLInputElement>(null);

  const { data, isLoading, isFetched, isRefetching } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    setProduct(data);
  }, [data]);

  const searchResultsHandler = () => {
    let results;
    if (data) {
      results = data.filter((item: FetchedProductItem) => {
        return item.title
          .toLowerCase()
          .includes(userSearch.current!.value.toLowerCase());
      });
    } 
    if (userSearch.current !== null) {
      setProduct(results);
    } else {
      return;
    }
  };

  const filterMensClothingHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
      return item.category === "men's clothing";
    });
    setProduct(results);
    setFiltersModalDisplaying(false);
    setCurrentFilter("mens")
  };

  const filterWomansClothingHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
      return item.category === "women's clothing";
    });
    setProduct(results);
    setFiltersModalDisplaying(false);
    setCurrentFilter("womans")
  };

  const filterJewelryHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
      return item.category === "jewelery";
    });
    setProduct(results);
    setFiltersModalDisplaying(false);
    setCurrentFilter("jewelery")
  };

  const filterElectronicsHandler = () => {
    let results = data.filter((item: FetchedProductItem) => {
      return item.category === "electronics";
    });
    setProduct(results);
    setFiltersModalDisplaying(false);
    setCurrentFilter("electronics")
  };

  const filterAllProducts = () => {
    setProduct(data);
    setFiltersModalDisplaying(false);
    setCurrentFilter("all")
  };

  const toggleFiltersDropdown = () => {
    if (filtersModalDisplaying) {
      setFiltersModalDisplaying(false);
    } else setFiltersModalDisplaying(true);
    console.log(filtersModalDisplaying);
  };

  const filtersDropdownButton = (
    <div className={classes["filters-dropdown"]}>
      <Button action={toggleFiltersDropdown} name={"Filters"} />
    </div>
  );

  const filtersModal = (
    <ProductsFiltersModal
      modalDisplaying={filtersModalDisplaying}
      mensClothing={filterMensClothingHandler}
      womansClothing={filterWomansClothingHandler}
      jewelry={filterJewelryHandler}
      tech={filterElectronicsHandler}
      allProducts={filterAllProducts}
      closeModal={toggleFiltersDropdown}
    />
  );

  console.log(currentFilter)
    
  return (
    <div className={classes["page-container"]}>
      <motion.div className={classes['progress-bar-container']} >
        <motion.div className={classes['progress-bar']} style={{ scaleX: scaleX }} />
      </motion.div>
      <AnimatePresence>
        {filtersModalDisplaying && filtersModal}
      </AnimatePresence>
      {filtersDropdownButton}
      <div className={classes["search-container"]}>
        <div className={classes.search}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            autoComplete="false"
            name="hidden"
            id="search"
            onChange={searchResultsHandler}
            ref={userSearch}
          />
          <div className={classes["filters-container"]}>
            <h3>Filters</h3>
            <div className={classes["filter-options"]}>
              <AnimatePresence>
                <Button
                  active={currentFilter === "mens" ? true : false}
                  name={"Mens Clothing"}
                  action={filterMensClothingHandler}
                />
                <Button
                active={currentFilter === "womans" ? true : false}
                  name={"Women's Clothing"}
                  action={filterWomansClothingHandler}
                />
                <Button active={currentFilter === "jewelery" ? true : false} name={"Jewelry"} action={filterJewelryHandler} />
                <Button active={currentFilter === "electronics" ? true : false} name={"Tech"} action={filterElectronicsHandler} />
                <Button active={currentFilter === "all" ? true : false} name={"All products"} action={filterAllProducts} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["products-container"]} ref={productsSection}>
        <motion.ul
          animate={{ transition: { staggerChildren: 0.2 } }}
          className={classes.products}
        >
          {isFetched &&
            product &&
            product.length === 0 &&
            !isRefetching &&
            "No results found."}
          {isLoading && "Loading..."}
          {product &&
            product.map((item: ProductItemType) => (
              <ProductItem
                key={item.id}
                id={item.id}
                name={item.title}
                imageUrl={item.image}
                itemDescription={item.description}
              />
            ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default ProductPage;
