import { useState, useContext } from 'react';
import { TodoContext } from '../../context/todo.context';

const Form = () => {
    const { addTask } = useContext(TodoContext);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput('');
    }

    return (
        <div className='form-container'>
            <form action="" onSubmit={e => handleSubmit(e)}>
                <div>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter task" />
                </div>
                <div>
                    <input type="submit" value="Add" className='btn-add' />
                </div>
            </form>
        </div>
    )
}

export default Form