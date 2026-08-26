import { useEffect, useState } from "react";
import Field from "../Field/Field";
import './styles.css';
import type { TaskType } from "./types";
import TaskList from "./TaskList/TaskList";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

const ToDoList = () => {
    const initialTasks: TaskType[] = [
        {id: '000', label: 'Do Yoga', isDone: false},
        {id: '001', label: 'Play Overwatch', isDone: true}
    ]

    const [tasks, setTasks] = useState<TaskType[]>(() => {
        const savedTasks = localStorage.getItem('tasks');

        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return initialTasks;
    });

    const [newTaskTitle, setNewTask] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); 

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString,
                label: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask]);
            setNewTask('');
            setSearchQuery('');
        }
    }

    const removeTask = (id: string) => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    }

    const removeAll = () => {
        const isConfirmed = confirm('Are you sure you want to delete all tasks?');
        if (isConfirmed) setTasks([]);
    }

    const toggleTask = (taskId: string) => {
        setTasks(
            tasks.map(task =>
            task.id === taskId ? { ...task, isDone: !task.isDone } : task
        ));
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filteredTasks = clearSearchQuery.length > 0
        ? tasks.filter(({ label }) => label.toLowerCase().includes(clearSearchQuery))
        : null;

    return (
        <div className="todoList">
            <div className="formsContainer">
                <AddTaskForm newTask={newTaskTitle} setNewTask={setNewTask} addTask={addTask}/>
                <SearchTaskForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  
            </div>
            <TaskList tasks={tasks} filteredTasks={filteredTasks} removeAll={removeAll} removeOne={removeTask} toggleTask={toggleTask}/>
        </div>
    )
  
}

export default ToDoList;