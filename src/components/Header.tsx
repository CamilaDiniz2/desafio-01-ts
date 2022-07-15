import React from 'react';
import styles from './Header.module.css';
import logoToDoList from '../assets/logo.svg';


export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoToDoList} />
    </header>
  );
}
