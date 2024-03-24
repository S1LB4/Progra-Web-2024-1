import './DownBar.css';
import {useState, useEffect} from 'react';
import {Button} from '../Button/Button';

export function DownBar ({tasks, onCompleteTasks}) {
    const [completedTasks, setCompletedTasks] = useState('none tasks completed');

    useEffect(() => {
        if (tasks) {
            const completedtasksCount = tasks.filter(task => task.completed).length;
            setCompletedTasks(`${completedtasksCount} out of ${tasks.length} completed`);
        }
    }, [tasks]);
    return(
        <div>
            <p className='text'>{completedTasks}</p>
            <Button title="Completed Tasks" onClick={()=> onCompleteTasks()}/>

        </div>
    );
}