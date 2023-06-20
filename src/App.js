import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  
  const [taskData, setTaskData] = useState(TASKS);

  const updateIsComplete = (taskId, completeStatus) => {
    // console.log('UpdateIs complete is being called');
    const newTaskData = taskData.map((task) => {
      if (task.id === taskId){
      const updatedStatusTask = {...task};
      updatedStatusTask.isComplete = !completeStatus;
      return updatedStatusTask;
      } else return {...task};
    });
    setTaskData(newTaskData);
  };

  const deleteTask = (taskId) =>{

    const newTaskData = taskData.filter(task => task.id !== taskId);
    setTaskData(newTaskData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        
        <div><TaskList tasks={taskData} updateIsComplete={updateIsComplete} deleteTask={deleteTask} /></div>
      </main>
    </div>
  );
  };


export default App;
