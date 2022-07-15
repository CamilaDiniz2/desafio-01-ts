import React, { InvalidEvent } from 'react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';
import { MdAddCircleOutline, MdAssignment } from 'react-icons/md';
import styles from './Todolist.module.css';


export function TodoList() {
  const [listOfTasks, setListOfTasks] = useState([
    {
      id: uuidv4(),
      content:
        'Corrigir exercícios de sinais e sistemas e dar notas aos alunos',
      isFinished: false,
      
    },
    {
      id: uuidv4(),
      content:
        'Preparar aulas e experimentos da disciplina de circuitos elétricos I',
      isFinished: false,
      
    },
    {
      id: uuidv4(),
      content: 'Iniciar um novo curso de react',
      isFinished: false,
    },
  ]);

  const [newTaskContent, setNewTaskContent] = useState('');

  const numberOfTaksCreated = listOfTasks.length;

  const finishedTasks = listOfTasks.filter((task) => {
    return task.isFinished === true;
  });

  const numberOfFinishedTasks = finishedTasks.length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setListOfTasks([
      ...listOfTasks,
      { id: uuidv4(), content: newTaskContent, isFinished: false },
    ]);
    setNewTaskContent('');
    
  }

  function handleNewTaskContent(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');

    setNewTaskContent(event.target.value);
  }

  function deleteTask(id: string) {
    const newListOfTasks = listOfTasks.filter((task) => task.id !== id);

    setListOfTasks(newListOfTasks);
  }

  function changeTaskCompleted(key: string) {
    const newListOfTasksWithoNoChange = listOfTasks.filter(
      (task) => task.id !== key
    );

    const newTaskChanged = listOfTasks.filter((task) => task.id == key);
    newTaskChanged[0].isFinished = !newTaskChanged[0].isFinished;

    const newListOfTasks = [...newListOfTasksWithoNoChange, ...newTaskChanged];

    const tasksFinished = newListOfTasks.filter(
      (task) => task.isFinished == true
    );

    const tasksNotFinished = newListOfTasks.filter(
      (task) => task.isFinished != true
    );

    setListOfTasks([...tasksNotFinished, ...tasksFinished]);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Campo obrigatório');
  }

  const isNewTaskContentEmpty = newTaskContent.length === 0;

  return (
    <div className={styles.todolist}>
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <textarea
          placeholder="Adicione uma nova tarefa"
          name="newTask"
          value={newTaskContent}
          onChange={handleNewTaskContent}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewTaskContentEmpty}>
            <span>Criar</span> <MdAddCircleOutline size={16} />
          </button>
        </footer>
      </form>

      <div className={styles.infoToDoList}>
        <strong>
          Tarefas criadas <span>{numberOfTaksCreated}</span>
        </strong>
        <strong>
          Concluídas{' '}
          <span>
            {numberOfFinishedTasks} de {numberOfTaksCreated}
          </span>
        </strong>
      </div>

      {numberOfTaksCreated !== 0 && (
        <main className={styles.listOfTasks}>
          {listOfTasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isFinished={task.isFinished}
                
                onDeleteTask={deleteTask}
                onChangeTaskCompleted={changeTaskCompleted}
              />
            );
          })}
        </main>
      )}

      {numberOfTaksCreated === 0 && (
        <main className={styles.mainwithouttasks}>
          <MdAssignment size={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </main>
      )}
    </div>
  );
}
function setNewTask(arg0: string) {
  throw new Error('Function not implemented.');
}

