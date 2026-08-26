import type React from "react";
import Button from "../Button/Button";
import './styles.css'

interface FieldPorps {
    newTask: string,
    setNewTask: (newTask: any) => void,
    addTask: () => void,
}

const AddField = (props: FieldPorps) => {
    const {
        newTask,
        setNewTask,
        addTask,
    } = props;

    const onSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        addTask();
    }

    return (
        <form onSubmit={onSubmit} className="addForm">
            <input placeholder=" " autoComplete="off" type="text" value={newTask} onInput={(event) => setNewTask(event.currentTarget.value)}></input>
            <Button type="text" label="Add" action={() => addTask()}/>
        </form>

    )
}

export default AddField;