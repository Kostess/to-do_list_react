import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className='centring'>
                <h2 className={classes.titlePage}>Todo App</h2>
            </div>
        </footer>
    )
}

export default Footer;