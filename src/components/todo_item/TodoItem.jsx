import {ButtonDelete, ButtonOk} from "../UI/button/Buttons.jsx";
import classes from "./TodoItem.module.css";

const TodoItem = ({dataTaskItem, toggleTaskStatus, deleteTask}) => {
    return (
        <div className={`${dataTaskItem.status ? classes.taskCompleted : classes.taskNotCompleted} ${classes.todoItem}`}>
            <div className={classes.countTask}>
                {dataTaskItem.id}
            </div>
            <div className={classes.flexGrowElement}>
                <h3 className={classes.titleTask}>{dataTaskItem.title}</h3>
                <p className={classes.descriptionTask}>
                    {dataTaskItem.description}
                </p>
            </div>
            <div className={classes.buttonGroup}>
                <ButtonOk onClick={toggleTaskStatus} statusTask={dataTaskItem.status}/>
                <ButtonDelete onClick={deleteTask}/>
            </div>
        </div>
    );
}

export default TodoItem;