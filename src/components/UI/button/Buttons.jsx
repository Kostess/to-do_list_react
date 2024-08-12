import classes from './Buttons.module.css'
import okImage from '../../../assets/ok.png';
const ButtonAddTodo = ({children, onclick, ...props}) => {
    return (
        <button className={classes.buttonAddTodo} onClick={onclick} {...props}>
            {children}
        </button>
    )
}

const ButtonFilter = ({children, ...props}) => {
    return (
        <button className={classes.buttonFilter} {...props}>
            {children}
        </button>
    )
}

const ButtonOk = ({onClick, statusTask}) => {
    return (
        <button className={`${classes.buttonTodoList} ${classes.buttonOk} ${statusTask ? classes.displayNoneButton : ''}`} onClick={onClick}>
            <img src={okImage} alt="ok"/>
        </button>
    )
}

const ButtonDelete = ({onClick}) => {
    return (
        <button className={`${classes.buttonTodoList} ${classes.buttonDelete}`} onClick={onClick}>
            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="-2" x2="41.01" y2="-2" transform="matrix(0.707081 0.707132 -0.767222 0.641381 4.00098 3)"
                      stroke="white" strokeWidth="4"/>
                <line y1="-2" x2="41.01" y2="-2" transform="matrix(0.707128 -0.707085 0.767181 0.641431 4 31.9991)"
                      stroke="white" strokeWidth="4"/>
            </svg>
        </button>
    )
}

export {ButtonAddTodo, ButtonFilter, ButtonOk, ButtonDelete};