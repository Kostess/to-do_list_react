import './App.css';
import Header from "./components/header/Header.jsx";
import AddTodo from "./components/add_todo/AddTodo.jsx";
import Filter from "./components/filter/Filter.jsx";
import TodoList from "./components/todo_list/TodoList.jsx";
import {useState, createContext, useEffect} from "react";
import Footer from "./components/footer/Footer.jsx";

export const ContextForm = createContext(undefined);

function App() {
    const [valueInput, setValueInput] = useState('');
    const [valueTextarea, setValueTextarea] = useState('');
    const [tasks, setTasks] = useState([]);
    const [filterValue, setFilterValue] = useState('all');

    useEffect(() => {
        const tempData = JSON.parse(localStorage.getItem('tempData')) || [];
        setTasks(tempData);
    }, []);

    const clear = () => {
        setValueInput('');
        setValueTextarea('');
    }

    const addTask = (e) => {
        e.preventDefault();

        let newTask = {}
        if (tasks.length) {
            newTask = {
                id: tasks[tasks.length-1].id + 1,
                title: valueInput,
                description: valueTextarea,
                status: false
            };
        } else {
            newTask = {
                id: 1,
                title: valueInput,
                description: valueTextarea,
                status: false
            };
        }

        const updatedTasks = [...tasks, newTask];
        localStorage.setItem('tempData', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        clear();
    }

    const toggleTaskStatus = (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: !task.status } : task
        );
        localStorage.setItem('tempData', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        localStorage.setItem('tempData', JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    };

    const onClickFilter = (e) => {
        setFilterValue(e.target.getAttribute('isstatus'))
    }
    return (
        <div className="app">
            <Header/>
            <div className="centring mainPart">
                <div className="mainBlock">
                    <div className="top">
                        <ContextForm.Provider value={
                            {
                                valueInput,
                                setValueInputData: e => setValueInput(e.target.value),
                                valueTextarea,
                                setValueTextareaData: e => setValueTextarea(e.target.value),
                            }
                        }>
                            <AddTodo add={addTask} clearValue={clear}/>
                        </ContextForm.Provider>
                        <Filter onClickFilter={onClickFilter}/>
                    </div>
                    <div className="bottom">
                        <TodoList dataTask={tasks}
                                  toggleTaskStatus={toggleTaskStatus}
                                  deleteTask={deleteTask}
                                  filterValue={filterValue}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;