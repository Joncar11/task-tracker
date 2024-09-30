// components/TaskList.js
import React from 'react';
import styles from '../styles/TaskTracker.module.css';

const TaskList = ({ tasks, onToggle }) => {
  return (
    <ul className={styles.taskTrackerList}>
      {tasks.map((task, index) => (
        <li key={index} className={styles.taskTrackerItem}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
            className={styles.taskTrackerCheckbox}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

