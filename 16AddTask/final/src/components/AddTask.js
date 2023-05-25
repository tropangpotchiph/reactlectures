import { useState, useRef } from 'react';
import './AddTask.css';

export const AddTask = ({ tasks, setTasks }) => {
  //   const [taskValue, setTaskValue] = useState('');
  const [progress, setProgress] = useState(false);
  const taskRef = useRef('');

  const handleChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleReset = () => {
    setTaskValue('');
    setProgress(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof Boolean(progress));
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    // console.log(task);
    setTasks([...tasks, task]);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="off"
          //   value={taskValue}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="submit">Add Task</button>
      </form>
      {/* <p>{taskValue}</p> */}
    </section>
  );
};
