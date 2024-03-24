import { useState, useEffect } from 'react'
import './Body.css'
import { AddTask } from "../AddTask/AddTask"
import { CheckBox } from '../checkbox/checkbox'
// import { TaskContainer } from '../Task/Task'
import { TaskList } from '../TaskList/TasksList';

function Body() {
  const { tasks, createTask, completeTask, deleteTask, deleteAllTasks } = useTasks();

  const handleCheckChange = (taskId) => {
    completeTask(taskId)
  };

  useEffect(() => {
  window.localStorage.setItem("tasks",  JSON.stringify(tasks));
}, [tasks])

  return (
    <>
    <div className="body">
    <div>
      <h2>Tasks Listed</h2>
      <AddTask onAddTask={addTasks} />
      {
        tasks.length > 0
      ? ( <TaskList tasks={tasks} onCheckChange={handleCheckChange} onDeleteTask={handleDeleteTask} />)
      : (<p>No tasks added yet...</p>)
      }
    </div>
      <div>
        {tasks.length > 0 && <DownBar tasks={tasks} onCompleteTasks={deleteAllTasks} />}
      </div>
    </div>
    </>
  );
}

export default Body
