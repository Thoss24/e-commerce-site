import classes from './Button.module.css';
import { motion } from 'framer-motion';

const Button: React.FC<{ name: string, action: () => void}> = (props) => {
    return (
        <motion.button whileHover={{ y: [0, -1], backgroundColor: '#dedede', cursor: 'pointer' }} transition={{ type: 'bounce', mass: 50, stiffness: 400 }} className={classes.button} onClick={props.action}>{props.name}</motion.button>
    )
};

export default Button