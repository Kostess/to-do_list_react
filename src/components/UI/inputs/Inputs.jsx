import classes from "./Inputs.module.css";
import {useContext} from "react";
import {ContextForm} from "../../../App.jsx";

const InputAddTodo = (props) => {
    const dataContextInput = useContext(ContextForm)

    return (
        <>
            <label htmlFor={props.id} className={classes.label}>
                {props.textLabel}:
            </label>
            <input id={props.id}
                   className={classes.inputs}
                   type="text"
                   placeholder={props.placeholder}
                   value={dataContextInput.valueInput}
                   onChange={dataContextInput.setValueInputData}
            />
        </>
    );
}

const TextareaAddTodo = (props) => {
    const dataContextTextarea = useContext(ContextForm)

    return (
        <>
            <label htmlFor={props.id} className={classes.label}>
                {props.textLabel}:
            </label>
            <textarea id={props.id}
                      className={`${classes.textarea} ${classes.inputs}`}
                      placeholder={props.placeholder}
                      value={dataContextTextarea.valueTextarea}
                      onChange={dataContextTextarea.setValueTextareaData}
            />
        </>
    );
}

export { InputAddTodo, TextareaAddTodo };