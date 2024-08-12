import {InputAddTodo, TextareaAddTodo} from "../UI/inputs/Inputs.jsx";
import {ButtonAddTodo} from "../UI/button/Buttons.jsx";
import classes from './AddTodo.module.css'

const AddTodo = (props) => {

    return (
        <div className={classes.addTaskBlock}>
            <h2 className={classes.titleBlock}>Добавить задание</h2>
            <form action="#" method="post" className={classes.formBlock}>
                <InputAddTodo id="titleTask"
                              type="text"
                              textLabel="Название задания"
                              placeholder="Введите название задания"
                />
                <div className={classes.textareaBlock}>
                    <TextareaAddTodo id="descriptionTask"
                                     textLabel="Описание задания"
                                     placeholder="Введите описание задания"
                    />
                </div>
                <div className={classes.buttonGroup}>
                    <ButtonAddTodo onclick={props.add}>
                        Добавить
                    </ButtonAddTodo>
                    <ButtonAddTodo type="reset" onclick={props.clearValue}>
                        Очистить
                    </ButtonAddTodo>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;