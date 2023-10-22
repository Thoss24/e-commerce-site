import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()

    console.log(error)

    return (
        <div>
            <h1></h1>
        </div>
    )
};

export default ErrorPage;