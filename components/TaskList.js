// components/TaskList.js
// 10-1-2024 added conditional class name to apply styles based on task completion status. 
import React from 'react';
import styles from '../styles/TaskTracker.module.css';

const TaskList = ({ tasks, onToggle }) => {
  return (
    <ul className={styles.taskTrackerList}>
      {tasks.map((task, index) => (
        <li key={index} className={`${styles.taskTrackerItem} ${task.completed ? styles.completed : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
            className={styles.taskTrackerCheckbox}
          />
          <span className={task.completed ? styles.completedText : ''}>
            {task.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

