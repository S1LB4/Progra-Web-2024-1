import './AddTask.css'
import { useState } from 'react';

export function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {id: crypto.randomUUID(), title: task, completed: false};
      onAddTask(task);
      setTask('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='add-task'>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter a new task"
        className='add-task__input'/>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
