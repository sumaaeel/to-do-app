import { useState } from "react"
import './App.css'

const App = () => {
  const [inputValue, SetInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const AddTask = (e) => {
    e.preventDefault()
    if (inputValue.trim() == '') return alert('Pleas Write task');
    const newinput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    setTasks([...tasks, newinput])
    SetInputValue('')
  }
  const ClearTask = () => {
    setTasks([]);
  }
  const DeleteTask = (i) => {
    const taskList = [...tasks]
    taskList.splice(i, 1)
    setTasks(taskList)
  }
  const EditTask = (index) => {
    const newTask = prompt("Edit your task:", tasks[index]); 
    if (newTask !== null && newTask.trim() !== "") {
      setTasks((tasks) =>
        tasks.map((task, i) => (i === index ? newTask : task)) 
      );
    } else {
      alert("Task cannot be empty!");
    }
  };
  return (
    <div className='app'>
      <div className="input-block">
        <input className="input-text" type="text" placeholder="Write your task here" value={inputValue} onChange={(e) => SetInputValue(e.target.value)} />
        <button onClick={AddTask}>Add Task</button>
        <button onClick={ClearTask}>Clear All Tasks</button>
      </div>
      <ul className="ul-list">
        {tasks.map((task, i) => (
          <li key={i}>
            <p >{task}</p>
            <div style={{ display: "flex", gap: '10px' }} key={i}>
              <button onClick={() => DeleteTask(i)}>Delete Task</button>
              <button onClick={() => EditTask(i)}  >Edit</button>
            </div>
          </li>

        ))}
      </ul>

    </div>
  )
}

export default App
