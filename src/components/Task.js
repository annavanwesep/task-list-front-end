import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {

  const [isUpdated, setIsUpdated] = useState(props.isUpdated);

  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const toggleUpdate = () => {

    setIsUpdated(!isUpdated);
    props.updateTask(props.id);
}

  const toggleDelete = () => {
      console.log("toggle Delete is called!")
      props.updateDelete(props.id)
  }


  return (
    <li className="tasks__item">
      <button>
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
        <h3>Name: { props.title }</h3>
      </button>
      <button onClick={toggleUpdate} className="update-button">Update</button>
      <button onClick={toggleDelete} className="tasks__item__remove button">Delete</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool,
  updateTask: PropTypes.func,
  updateDelete: PropTypes.func
};

export default Task;
