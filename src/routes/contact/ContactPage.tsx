import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../../utility/http";
import classes from './ContactPage.module.css';

const ContactPage = () => {

    const { data } = useQuery({
        queryKey: ['contacts-images'],
        queryFn: fetchImages
    });

    return (
        <div className={classes['contacts-page']}>
        <h1>Contact Information</h1>
        </div>
    )
};

export default ContactPage;