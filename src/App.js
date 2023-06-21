import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  
  const [taskData, setTaskData] = useState([]);
  const teamAPI = 'https://task-list-api-c17.onrender.com/';

  const fetchAllTasks = () => {
    axios
      .get(teamAPI)
      .then((response) => {
        // console.log(response.data);
        const tasksCopy = response.data.map((task) => {
          return {
            ...task,
            isComplete: task.is_complete,
          };
        });
        setTaskData(tasksCopy);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  useEffect(fetchAllTasks, []);



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



  const deleteTask = (taskId) => {
    axios
      .delete(`${teamAPI}/${taskId}`)
      .then((response) => {
        const newTaskData = response.data.filter(task => task.id !== taskId);
        setTaskData(newTaskData);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
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
