import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
 const check =(taskId) =>{
  const array = tasks.map((task)=>
    place.id === taskId? {...task ,checked :!task.checked}:
    task
   )

      setTasks(array);
 }
  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    
    <div className="container todo-container bg-body-primary mt-5">
      <h1 className="text-center text-white">To-Do List</h1>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control text-black p"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-secondary p-2" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul className="list-group ">
        {tasks.map((task) => (
          
          <li
            key={task.id}  
            
            className={`d-flex  justify-content-center align-items-center text-white  ${
              task.completed ? 'list-group-item-success' : ''
            }`}
          > 
            <input type='checkbox'className='pp m-3' checked = {task.checked}
            onChange={() => {check(task.id)}}
            ></input>
            <span  className = " p-3 m-3" onClick={() => toggleCompletion(task.id)}>
              {task.task}
              </span>
            
            <button
              className="btn btn-danger btn-sm m-3" 
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
            </li>
        ))}
      </ul>
    </div>

  );
};

export default TodoApp;
