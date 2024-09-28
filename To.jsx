import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const TodoAppa = () => {
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

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todo-container">
      <div className="container mt-5">
        <h1 className="text-center text-white m-3 p-3 mb-4">To-Do List</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-secondary p-2" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className=" mb-3">
              <div className=" d-flex justify-content-center align-items-center">
                {/* Add the checkbox */}
                <input
                  type="checkbox"
                  className="form-check-input me-2 m-3"
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                />
                {/* Apply strike-through when completed */}
                <span
                  className={`task-text  ${task.completed ? 'completed' : ''} m-3 p-3 text-white` }
                >
                  {task.task}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoAppa;
