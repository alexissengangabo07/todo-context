import { useContext } from 'react';
import { TodoContext } from '../../context/todo.context';

const Tasks = () => {
    const { tasks, removeTask, updateTask } = useContext(TodoContext);
    return (
        <div className='tasks'>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id} className={task.done ? 'task-done' : ''}>
                            <span>{task.title}</span>
                            <input type="checkbox" onChange={() =>updateTask(task.id) } checked={task.done} />
                            <button onClick={() => removeTask(task.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tasks