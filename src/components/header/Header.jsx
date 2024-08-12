import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className='centring'>
                <h2 className={classes.titlePage}>Todo App</h2>
            </div>
        </header>
  )
}

export default Header;