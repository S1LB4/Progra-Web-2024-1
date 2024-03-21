import { useState } from 'react';
import './TasksList.css'

export function TasksList({ tasks }) {
  const [tasksState, setTasksStates] = useState(tasks.map(() => false));

  const handleCheckboxChange = (index) =>{
    setTasksStates((prevStates) =>{
      const newStates =  [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div>
      <h3>Tasks To Do:</h3>
      <div className='tasks-container'>
      <ul>
        {tasks.map((task, index) => (
          <div key={task} className = "tasks-main-container">
          <div className='checkbox-header'>
              <input className="checkbox" type="checkbox" checked= {tasksState[index]} onChange={() => handleCheckboxChange(index)}/>
              <li className='tasks-list'>{task.title}</li>
              </div>
              <button className='delete-button'>Delete</button>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}