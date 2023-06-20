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

function App() {

  const [tasks, setTasks] = useState(TASKS);

  const updateIsComplete = (taskId) => {

    // create a new list of tasks with updated task value
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
      //   task.isUpdated = !task.isUpdated;
      // }
      return {
        ...task,
        isUpdated:!task.isUpdated
      }
    }
    return task;
  });

    setTasks(updatedTasks);
  }

  const DeleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return { ...task };
      }
    });

    const filteredUpdatedData = updatedTasks.filter(function (element) {
      return element !== undefined;
    });

    setTasks(filteredUpdatedData);
  }

  const toggleComplete = (taskId, newStatus) => {
    const newTaskList = [];

    let taskStatus = '';
    if (newStatus === true) {
      taskStatus = 'mark_complete';
    } else if (newStatus === false) {
      taskStatus = 'mark_incomplete';
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList 
        tasks={TASKS} 
        updateIsComplete={updateIsComplete}
        DeleteTask={DeleteTask}
        />}</div>
      </main>
    </div>
  );
}

export default App;
