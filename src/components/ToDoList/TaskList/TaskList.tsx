import { X } from 'lucide-react';
import type { TaskType } from '../types';
import './styles.css';
import Button from '../../Button/Button';
import { memo, useMemo } from 'react';

interface DeleteAllProps {
    onClick?: () => void;
}

const DeleteAllButton = (props: DeleteAllProps) => {
    return (
        <div className="deleteAll" onClick={props.onClick}>
            Delete all
        </div>
    );
};
interface TaskItemProps {
    task: TaskType;
    ref: React.RefObject<HTMLDivElement | null> | null;
    toggleTask: (id: string) => void;
    removeOne: (id: string) => void;
}

const TaskItem = memo((props: TaskItemProps) => {
    const { task, ref, toggleTask, removeOne } = props;

    return (
        <div className="taskItem" key={task.id} ref={ref}>
            <input
                id={task.id}
                type="checkbox"
                checked={task.isDone}
                onChange={() => toggleTask(task.id)}
            />
            <label htmlFor={task.id} className={task.isDone ? 'done' : ''}>
                {task.label}
            </label>
            <div className="deleteBtn" onClick={() => removeOne(task.id)}>
                <X size={18} />
            </div>
        </div>
    );
});

interface TaskListProps {
    tasks: TaskType[];
    filteredTasks: TaskType[] | null;
    firstIncompleteRef: React.RefObject<HTMLDivElement | null>;
    firstIncompleteId: string | undefined;
    removeAll: () => void;
    removeOne: (id: string) => void;
    toggleTask: (id: string) => void;
}

const TaskList = (props: TaskListProps) => {
    const {
        tasks,
        filteredTasks,
        firstIncompleteRef,
        firstIncompleteId,
        removeAll,
        removeOne,
        toggleTask,
    } = props;

    const tasksDone = useMemo(() => {
        return tasks.filter((task) => task.isDone === true).length;
    }, [tasks]);

    const tasksLength = tasks.length;

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = hasTasks && filteredTasks?.length === 0;

    if (!hasTasks || isEmptyFilteredTasks) {
        return (
            <div className="emptyMessage">
                {!hasTasks ? 'There are no tasks yet :c' : 'Tasks not found'}
            </div>
        );
    }

    return (
        <div className="taskListContainer">
            <div className="taskListHeader">
                <div>
                    Done {tasksDone} out of {tasksLength}
                </div>
                <DeleteAllButton onClick={removeAll} />
            </div>
            <Button
                label="Show first incomplete task"
                action={() => firstIncompleteRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            <div className="taskList">
                {(filteredTasks ?? tasks).map((task) => (
                    <TaskItem
                        key={task.id}
                        ref={task.id === firstIncompleteId ? firstIncompleteRef : null}
                        task={task}
                        removeOne={removeOne}
                        toggleTask={toggleTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default memo(TaskList);
