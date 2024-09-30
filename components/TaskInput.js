


import React, { useState } from 'react';
import styles from '../styles/TaskTracker.module.css';

const TaskInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className={styles.taskTrackerForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.taskTrackerInput}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit" className={styles.taskTrackerButton}>
        Add
      </button>
    </form> 
  );
};

export default TaskInput;

