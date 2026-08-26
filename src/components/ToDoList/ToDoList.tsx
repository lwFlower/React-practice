import { useState } from "react";
import AddField from "../AddField/AddField";
import './styles.css';
import type { TaskType } from "./types";
import TaskList from "./TaskList/TaskList";

const ToDoList = () => {
    const initialTasks: TaskType[] = [
        {id: '000', label: 'Do Yoga', isDone: false},
        {id: '001', label: 'Play Overwatch', isDone: true}
    ]

    const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
    const [newTaskTitle, setNewTask] = useState('');

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString,
                label: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    const removeAll = () => {
        setTasks([]);
    }

    const toggleTask = (taskId: string) => {
        setTasks(
            tasks.map(task =>
            task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ));
    }

    return (
        <div className="todoList">
            <AddField newTask={newTaskTitle} setNewTask={setNewTask} addTask={addTask}/>
            <TaskList tasks={tasks} removeAll={removeAll} removeOne={removeTask} toggleTask={toggleTask}/>
        </div>
    )
  
}

export default ToDoList;