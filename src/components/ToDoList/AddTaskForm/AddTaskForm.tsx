import type { RefObject } from 'react';
import Button from '../../Button/Button';
import Field from '../../Field/Field';
import './style.css';

interface AddFormProps {
    newTask: string;
    setNewTask: (newTask: string) => void;
    newTaskInputRef?: RefObject<HTMLInputElement | null>;
    addTask: () => void;
}

const AddTaskForm = (props: AddFormProps) => {
    const { newTask, setNewTask, newTaskInputRef, addTask } = props;

    const onSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        addTask();
    };

    return (
        <form onSubmit={onSubmit} className="addForm">
            <Field
                label="New task title"
                id="id-new-task"
                value={newTask}
                onInput={(event) => setNewTask(event.currentTarget.value)}
                ref={newTaskInputRef}
            />
            <Button label="Add" action={() => addTask()} />
        </form>
    );
};

export default AddTaskForm;
