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
        setTasks([...tasks, {
            id: new Date().getTime(),
            title: task,
            done: false
        }])
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const updateTask = (task) => {
        console.log('UPDATE_TASK');
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
            {children}
        </TodoContext.Provider>
    )
}