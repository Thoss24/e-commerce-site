import classes from './Button.module.css';
import { motion } from 'framer-motion';

const Button: React.FC<{ name: string, action: () => void}> = (props) => {
    return (
        <motion.button whileHover={{ scale: 1.1 }} transition={{ type: 'bounce', mass: 100, stiffness: 100 }} className={classes.button} onClick={props.action}>{props.name}</motion.button>
    )
};

export default Button