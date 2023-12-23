import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import classes from './ErrorPage.module.css';

const ErrorPage: React.FC = () => {
    const error = useRouteError() as Error;

    let title: string = "An error occurred!";
    let message: string = "Something went wrong!"

    if (!isRouteErrorResponse(error)) {
        return null
    };

    if (error.status === 500) {
        message = error.data.message
    };

    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find page!";
    };

    return (
        <div className={classes.error}>
            <h1>{title}</h1>
            <h3>{message}</h3>
        </div>
    )
};

export default ErrorPage;