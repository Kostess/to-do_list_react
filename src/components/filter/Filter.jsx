import {ButtonFilter} from "../UI/button/Buttons.jsx";
import classes from './Filter.module.css';

const Filter = ({onClickFilter}) => {
    return (
        <div>
            <h2 className={classes.titleBlock}>Фильтр</h2>
            <div className={classes.listButton}>
                <ButtonFilter isstatus='false' onClick={onClickFilter}>
                    Активные
                </ButtonFilter>
                <ButtonFilter isstatus='true' onClick={onClickFilter}>
                    Выполненные
                </ButtonFilter>
                <ButtonFilter isstatus='all' onClick={onClickFilter}>
                    Все
                </ButtonFilter>
            </div>
        </div>
    )
}

export default Filter;