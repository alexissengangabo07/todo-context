import { useContext } from 'react';
import { TodoContext } from '../../context/todo.context';

const Tasks = () => {
    const { tasks, removeTask, updateTask } = useContext(TodoContext);
    return (
        <div className='tasks'>
            <ul id='tasks-list'>
                {
                    tasks.map(task => (
                        <li key={task.id}>

                            <div>
                                <span className={task.done ? 'task-done' : ''}>{task.title}</span>
                            </div>
                            <div className='actions'>
                                <input type="checkbox" onChange={() => updateTask(task.id)} checked={task.done} />
                                <button onClick={() => removeTask(task.id)} className="btn-delete">X</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tasks