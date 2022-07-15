import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BiCircle } from 'react-icons/bi';
import { MdCheckCircle } from 'react-icons/md';

import styles from './Task.module.css';


interface TaskProps{
  id: string;
  content: string;
  isFinished: boolean;
  onDeleteTask: Function;
  onChangeTaskCompleted: Function;
  
}

export function Task({
  id,
  content,
  isFinished,
  onDeleteTask,
  onChangeTaskCompleted,
}: TaskProps) {
  
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleTaskFinishedChange() {
    onChangeTaskCompleted(id);
  }

  return (
    <div className={styles.task}>
      <main>
        <button
          onClick={handleTaskFinishedChange}
          className={styles.checkboxRadio}
        >
          {isFinished === true && (
            <span>
              <MdCheckCircle size={20} color="#5e60ce" />
            </span>
          )}
          {isFinished === false && <BiCircle size={16} color="#1e6f9f" />}
        </button>

        

        <p
          className={
            isFinished ? styles.taskCompleted : styles.taskNotCompleted
          }
        >
          {content}
        </p>
        
        <button onClick={handleDeleteTask} className={styles.deleteTask}>
          <FaRegTrashAlt />
        </button>
      </main>
    </div>
  );
}
