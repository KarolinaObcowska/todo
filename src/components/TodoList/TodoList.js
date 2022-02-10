/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { TODO } from '../../utils/data';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState(TODO);
  return (
    <section className="main">
      <h2 className="main__title">Todo List</h2>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <ul className="todo-list">
        {tasks.length ? (
          tasks.map((task, index) => (
            <TodoItem
              key={task.id}
              taskIndex={index}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))
        ) : (
          <small className="todo-list__alt-text">
            You have not added any tasks yet.
          </small>
        )}
      </ul>
    </section>
  );
};

export default TodoList;
