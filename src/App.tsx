import React from 'react';
import { Header } from './components/Header';
import { TodoList } from './components/Todolist';

import styles from './App.module.css';


export function App() {
  return (
    <div className={styles.app}>
      <Header />
      
      <TodoList />
      
    </div>
  );
}
