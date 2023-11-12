import classes from './Button.module.css';

const Button: React.FC<{ name: string, action: () => void}> = (props) => {
    return (
        <button className={classes.button} onClick={props.action}>{props.name}</button>
    )
};

export default Button