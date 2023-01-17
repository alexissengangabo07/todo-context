import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'task 1',
            done: false
        },
        {
            id: 2,
            title: 'task 2',
            done: true
        }
    ]);

    const addTask = (task) => {
        if (task.trim() !== '') {
            setTasks([...tasks, {
                id: new Date().getTime(),
                title: task.trim(),
                done: false
            }])
        }
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const updateTask = (id) => {
        const taskCopy = [...tasks];
        const taskIndex = taskCopy.findIndex(task => task.id === id);
        taskCopy[taskIndex].done = !taskCopy[taskIndex].done;

        setTasks(taskCopy);
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
            {children}
        </TodoContext.Provider>
    )
}