import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const tasks = props.tasks;

  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          isUpdated = { task.isUpdated}
          updateTask = {props.updateTask}
          updateDelete = {props.updateDelete}
          // toggleComplete = {props.toggleComplete}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(tasks)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
      isUpdated:PropTypes.bool
    })
  ).isRequired,
  updateTask: PropTypes.func,
  updateDelete: PropTypes.func,
  toggleComplete: PropTypes.func
};

export default TaskList;
