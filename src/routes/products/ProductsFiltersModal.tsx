import classes from './ProductsFiltersModal.module.css';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';

const ProductsFiltersModal = () => {
    return (
        <div className={classes['filters-modal-container']}>
            <div className={classes.background}/>
            <motion.div className={classes['filters-modal']}>
                <h2>Filters</h2>
                {/* <Button name={'Men\'s Clothing'} />
                <Button name={'Women\'s Clothing'} />
                <Button name={'Jewelry'} />
                <Button name={'Tech'} />
                <Button name={'All Products'} /> */}
            </motion.div>
        </div>
    )
}

export default ProductsFiltersModal