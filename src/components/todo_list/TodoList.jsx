import TodoItem from "../todo_item/TodoItem.jsx";
import classes from "./TodoList.module.css";

const TodoList = ({dataTask = [], toggleTaskStatus, deleteTask, filterValue}) => {

    let newDataTask = []
    if (filterValue !== 'all') {
        newDataTask = dataTask.filter(task => {
            return task.status === (filterValue === 'true')
        })

    }
    else {
        newDataTask = [...dataTask]
    }

    return (
        <div>
            <h2 className={classes.titleBlock}>Список задач</h2>
            <div className={classes.todoList}>
                {newDataTask.map((dataTaskEl) => {
                    return  <TodoItem key={dataTaskEl.id}
                                      dataTaskItem={dataTaskEl}
                                      toggleTaskStatus={() => toggleTaskStatus(dataTaskEl.id)}
                                      deleteTask={() => deleteTask(dataTaskEl.id)}
                    />
                })}
            </div>
        </div>
    );
}

export default TodoList;