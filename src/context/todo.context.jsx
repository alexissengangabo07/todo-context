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
        console.log('ADD_TASK')
    }

    const removeTask = (task) => {
        console.log('REMOVE_TASK');
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