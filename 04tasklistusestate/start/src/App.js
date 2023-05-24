import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false },
  ]);

  return (
    <div>
      <h1>TropangCharat64</h1>
    </div>
  );
}
export default App;
