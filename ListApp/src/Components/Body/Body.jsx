import { useState, useEffect } from 'react'
import './Body.css'
import { AddTask } from "../AddTask/AddTask"
import { CheckBox } from '../checkbox/checkbox'
// import { TaskContainer } from '../Task/Task'
import { TaskList } from '../TaskList/TasksList';

function Body() {

  const [tasks, setTasks] = useState([initTasks]);

useEffect(() => {
  window.localStorage.setItem("tasks",  JSON.stringify(tasks));
}, [tasks])
const addTasks = (newTasks) => {
  const update = [...tasks, newTasks];
  localStorage.setItem("tasks", JSON.stringify(update));
  setTasks(update);
};



  return (
    <>
    <div className="body">
    <div>
      <h2>Tasks Listed</h2>
      <AddTask onAddTask={addTasks} />
      {
        tasks.length > 0
      ? ( <TaskList tasks={tasks} />)
      : (<p>No tasks added yet</p>)
      }
    </div>

    </div>
    </>
  )
}

export default Body
