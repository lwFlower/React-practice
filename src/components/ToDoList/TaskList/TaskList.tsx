
import { X } from "lucide-react";
import type { TaskType } from "../types";
import './styles.css'

interface DeleteAllProps {
    onClick: () => void
}

const DeleteAllButton = (props: DeleteAllProps) => {
    return (
        <div className="deleteAll" onClick={props.onClick} >
            Delete all
        </div>
    )
}
interface TaskItemProps {
    task: TaskType;
    toggleTask: (id: string) => void;
    removeOne: (id: string) => void;
}

const TaskItem = (props: TaskItemProps)  => {
    const {
        task,
        toggleTask,
        removeOne,
    } = props;

    return (
        <div className="taskItem" key={task.id}>
            <input id={task.id} type="checkbox" checked={task.isDone} onChange={() => toggleTask(task.id)}/>
            <label htmlFor={task.id} className={task.isDone ? 'done' : ''}>{task.label}</label>
            <div className="deleteBtn" onClick={() => removeOne(task.id)}>
                <X size={18} />
            </div>
        </div>
    )
}

interface TaskListProps {
    tasks: TaskType[];
    filteredTasks: TaskType[] | null;
    removeAll: () => void;
    removeOne: (id: string) => void;
    toggleTask: (id: string) => void;
}

const TaskList = (props: TaskListProps) => {
    const { tasks, filteredTasks, removeAll, removeOne, toggleTask } = props;

    const tasksDone = tasks.filter(task => task.isDone === true).length;
    const tasksLength = tasks.length;

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = hasTasks && filteredTasks?.length === 0;

    if (!hasTasks || isEmptyFilteredTasks) {
        return <div className="emptyMessage">{!hasTasks ? 'There are no tasks yet :c' : 'Tasks not found'}</div>
    }

    return (
        <div className="taskListContainer">
            <div className="taskListHeader">
                <p>Done {tasksDone} out of {tasksLength}</p>
                <DeleteAllButton onClick={removeAll}/>
            </div>
            <div className="taskList">
                {(filteredTasks ?? tasks).map(task => <TaskItem key={task.id} task={task} removeOne={removeOne} toggleTask={toggleTask} />)}
            </div>
        </div>
    )
}

export default TaskList;