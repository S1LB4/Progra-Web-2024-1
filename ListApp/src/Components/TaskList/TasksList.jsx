import { Button } from '../Button/Button';
import './TasksList.css'

export function TasksList({ tasks, onCheckChange, onDeleteTask}) {


  const handleCheckboxChange = (taskId) =>{
    onCheckChange(taskId)
  };
  const handleDeleteTask = (taskId) =>{
    onDeleteTask(taskId);
  }

  return (
    <div>
      <h3>Tasks To Do:</h3>
      <div className='tasks-container'>
      <ul>
        {tasks.map((task) => (
        <li key={task.id} className="task-main-container">
              <div className="checkbox-title">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                />
                <span
                  className="task-list"
                  style={{
                    textDecoration: task.completed? 'line-through' : 'none',
                  }}
                >
                  {task.title}
                </span>
              </div>
              <Button title="delete" onClick={() => handleDeleteTask(task.id)}> Delete </Button>
            </li>
        ))}
      </ul>
      </div>
    </div>
  );
}