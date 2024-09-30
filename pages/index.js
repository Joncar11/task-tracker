// pages/index.js
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import styles from '../styles/TaskTracker.module.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Task Tracker!</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  );
};

export default Home;





